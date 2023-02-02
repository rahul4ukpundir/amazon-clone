import React, { useEffect, useState } from "react";
import AmazonLogo from "../image/amazonLOGO.png";
import { useDataLayerValue } from "../MockData/DataLayer/DataLayer";
import { useNavigate } from "react-router-dom";
import useForm from "./useForm";
import googleLogo from "../image/googleLogo.png";
import facebookLogo from "../image/facebookLogo.png";
import linkdinLogo from "../image/linkdinLogo.png";
import {
  triggerCreateUserWithEmailAndPassword,
  triggerLoginWithEmailAndPassword,
  triggerLoginWithGmail,
} from "../helper/signInHelper";
import "./Login.css";

const Login = () => {
  const { userState, userDispatch } = useDataLayerValue();
  const navigate = useNavigate();
  const submitFrom =  () => {
    loginWithEmailAndPassword();
  };
  const { values, errors, handleChange, handleSubmit } = useForm(submitFrom);



  const loginWithEmailAndPassword = async () => {
    try {
      const result = await triggerLoginWithEmailAndPassword(values);
      userDispatch({
        type: "SET_USER",
        payload: result.user,
      });
      navigate("/");
    } catch (error) {
      alert("email address and password is incorrect");
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const loginWithGmail = async () => {
    try {
      const result = await triggerLoginWithGmail(values);
      userDispatch({
        type: "SET_USER",
        payload: result.user,
      });
      navigate("/");
    } catch (error) {
      alert("email address and password is incorrect");
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <div className="login__container">
      <img src={AmazonLogo} />
      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <h5>Email</h5>
            <input
              type="text"
              name="email"
              placeholder="Please enter email"
              value={values?.email || ""}
              onChange={handleChange}
            />
            <span className="validation">{errors && errors["email"]}</span>
          </div>
          <div className="row">
            <h5>Password</h5>
            <input
              type="text"
              name="password"
              placeholder="Please enter password"
              value={values?.password || ""}
              onChange={handleChange}
            />
            <span className="validation">{errors && errors["password"]}</span>
          </div>
          <button
            type="submit"
            className="btn_signIn"
            disabled={errors?.length > 0 ? true : false}
          >
            Sign In{" "}
          </button>
        </form>
        <div className="or"> OR </div>

        <div className="social__medial__login">
          <div
            className="social__medial__siginin"
            onClick={() => loginWithGmail()}
          >
            <img src={googleLogo} />
            <button>Sign in with Google</button>
          </div>
          <div className="social__medial__siginin">
            <img src={facebookLogo} />
            <button>Sign in with Facebook</button>
          </div>
          <div className="social__medial__siginin">
            <img src={linkdinLogo} />
            <button>Sign in with Linkdin</button>
          </div>
        </div>
      </div>

      <div className="registration_button">
        <button>Create your e-commerce account</button>
      </div>
    </div>
  );
};

export default Login;
