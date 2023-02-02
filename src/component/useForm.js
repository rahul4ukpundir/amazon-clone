import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validateOnSubmit = (values) =>{
    if(!values.email){
      setErrors((errors)=>({...errors, email: "Please enter email"}));
    }
    if(!values.password){
      setErrors((errors)=>({...errors, password: "Please enter password"}));
    } 
  }

  const validateInputsOnChange = (name, value) => {
    switch (name) {
      case "email":
        if(value === ""){
          setErrors({
            ...errors,
            email: "Please enter email",
          });
        }
        else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if(value === ""){
          setErrors({
            ...errors,
            password:
            "Please enter password"
          });
        }
       else if (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value) ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {

          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validateInputsOnChange(name, value);
    setValues({
      ...values,
      [name]: value,
    });

  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    validateOnSubmit(values);
    if (Object.keys(errors).length === 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
