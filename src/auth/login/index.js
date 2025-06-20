import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  Form,
  FormGroup,
  Label,
  Input,
  Options,
  CheckboxLabel,
  Link,
  SubmitButton,
  DividerText,
  SocialButtonGroup,
  SocialButton,
  SocialIcon,
  PasswordWrapper,
  ToggleBtn,
  FormSection,
  ErrorText,
} from "./styles";

import sign from "../../assets/images/sign.png";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate("/pages/Home");
  };

  return (
    <Wrapper>
      <Container>
        <ImageSection>
          <BackgroundImage src={sign} alt="Car lot" />
        </ImageSection>

        <FormSection>
          <LogoWrapper>
            <Logo src={logo} alt="Logo" width="100" height="50" />
          </LogoWrapper>

          <Title>Sign in to your Account</Title>
          <Subtitle>Welcome back! please enter your detail</Subtitle>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <PasswordWrapper>
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
                        "Start with [A-z], include number & special character, min 8 characters",
                    },
                  })}
                />
                <ToggleBtn
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </ToggleBtn>
              </PasswordWrapper>
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}
            </FormGroup>

            <Options>
              <CheckboxLabel>
                <input type="checkbox" />
                <span>Remember me</span>
              </CheckboxLabel>
              <Link as="button" onClick={() => navigate("/auth/forget_password")}>
                Forgot Password?
              </Link>
            </Options>

            <SubmitButton type="submit">Sign In</SubmitButton>
          </Form>

          <DividerText>
            Don’t have an account?{" "}
            <Link as="button" onClick={() => navigate("/auth/register")}>
              Sign Up
            </Link>
          </DividerText>

          <DividerText>OR</DividerText>

          <SocialButtonGroup>
            <SocialButton>
              <SocialIcon
                src="https://storage.googleapis.com/a1aa/image/12085afb-54c2-4c26-5dfa-167f553cabad.jpg"
                alt="Google"
              />
              <span>Sign in with Google</span>
            </SocialButton>
            <SocialButton>
              <SocialIcon
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
              />
              <span>Sign in with Facebook</span>
            </SocialButton>
            <SocialButton>
              <SocialIcon
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
              />
              <span>Sign in with Apple</span>
            </SocialButton>
          </SocialButtonGroup>
        </FormSection>
      </Container>
    </Wrapper>
  );
};

export default Login;
