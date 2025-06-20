import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  ForgettWrapper,
  ForgettContainer,
  ForgettLeft,
  ForgettImage,
  ForgettRight,
  ForgettBrand,
  ForgettTitle,
  ForgettText,
  ForgettForm,
  ForgettLabel,
  ForgettInput,
  ForgettButton,
  ErrorText,
} from "./styles";

import cover from "../../assets/images/Cover.png";
import logo from "../../assets/images/logo.png";

const Forgget = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/auth/OTP-page");
  };

  return (
    <ForgettWrapper>
      <ForgettContainer>
        <ForgettLeft>
          <ForgettImage src={cover} alt="Parking lot" />
        </ForgettLeft>

        <ForgettRight>
          <ForgettBrand src={logo} alt="CharterCar full logo" />
          <ForgettTitle>Forgot your Account?</ForgettTitle>
          <ForgettText>Please enter your registered email</ForgettText>

          <ForgettForm onSubmit={handleSubmit(onSubmit)}>
            <ForgettLabel htmlFor="email">Email</ForgettLabel>
            <ForgettInput
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <ErrorText > {errors.email.message}</ErrorText>
                 )
            }
            <ForgettButton type="submit">Continue</ForgettButton>
          </ForgettForm>
        </ForgettRight>
      </ForgettContainer>
    </ForgettWrapper>
  );
};

export default Forgget;
