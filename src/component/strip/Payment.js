import React, { useEffect, useState } from "react";
import "./Payment.css";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axois from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Payment = ({ amount, description, name }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(()=>{
    if(amount===0){
      navigate("/")
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axois.post("http://localhost:4000/payment", {
          amount: amount * 100,
          id,
        });

        if (response.data.succsess) {
          console.log("successful amount");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <>
      {!success ? (
        <div className="fromClass">
          <div className="payment__gateway">
            
            <h3>Payment using Strip Payment Gateway</h3></div>
          <form onSubmit={handleSubmit}>
            <CardElement
            className="card__payment"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    width: "300px",
                    fontWeight:800,
                    "::placeholder": {
                      color: "blue",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button type="submit" disabled={!stripe || !elements}>
              Pay {amount} Rs
            </button>
          </form>
        </div>
      ) : (
        <div>
          You have done the payment
          <Link to="/">
            <button className="btn__back">Back</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Payment;
