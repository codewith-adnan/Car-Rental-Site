import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Wrapper,
  Container,
  ImageSection,
  BackgroundImage,
  LogoWrapper,
  Logo,
  Title,
  Subtitle,
  FormSection,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
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
    <Wrapper>
      <Container>
        <ImageSection>
          <BackgroundImage src={cover} alt="Parking lot" />
        </ImageSection>

        <FormSection>
          <LogoWrapper>
            <Logo src={logo} alt="CharterCar full logo" />
          </LogoWrapper>

          <Title>Forgot your Account?</Title>
          <Subtitle>Please enter your registered email</Subtitle>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
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
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormGroup>

            <SubmitButton type="submit">Continue</SubmitButton>
          </Form>
        </FormSection>
      </Container>
    </Wrapper>
  );
};

export default Forgget;
