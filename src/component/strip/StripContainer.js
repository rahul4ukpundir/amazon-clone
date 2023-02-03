import React from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const publickey =
  "pk_test_51MWz1WSFUMymtIaFLrJJKtVmqXEnPX0qovum2H4xGfgGe6vdHxQ04FOXBcNuv1vzn2ieUBcxfDhy4yYU8hKme6Oi00axw1ldda";
const stripPromise = loadStripe(publickey);

const StripContainer = ({amount, description, name}) => {
  return (
    <Elements stripe={stripPromise}>
      <Payment amount = {amount} description  ={description} name = {name} />
    </Elements>
  );
};

export default StripContainer;
