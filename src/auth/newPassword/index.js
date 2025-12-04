import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Wrapper,
  Container,
  ImageSection,
  BackgroundImage,
  FormSection,
  LogoWrapper,
  Logo,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  ToggleButton,
  SubmitButton,
  ErrorText,
} from "./styles";
import cover from "../../assets/images/Cover.png";
import logo from "../../assets/images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = () => {
    navigate("/pages/Home");
  };

  return (
    <Wrapper>
      <Container>
        <ImageSection>
          <BackgroundImage src={cover} alt="Background" />
        </ImageSection>

        <FormSection>
          <LogoWrapper>
            <Logo src={logo} alt="Main Logo" />
          </LogoWrapper>

          <Title>Create New Password</Title>
          <Subtitle>
            Please Enter your Password and Confirm Password
          </Subtitle>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
                      message:
                        "Start with [A-Z],include number & special character,min 8 character",
                    },
                  })}
                />
                <ToggleButton
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </ToggleButton>
              </InputWrapper>
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InputWrapper>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                <ToggleButton
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </ToggleButton>
              </InputWrapper>
              {errors.confirmPassword && (
                <ErrorText>{errors.confirmPassword.message}</ErrorText>
              )}
            </FormGroup>

            <SubmitButton type="submit">Continue</SubmitButton>
          </Form>
        </FormSection>
      </Container>
    </Wrapper>
  );
};

export default CreatePassword;
