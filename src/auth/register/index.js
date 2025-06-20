import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";

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
  Link,
  SubmitButton,
  DividerText,
  SocialButtonGroup,
  SocialButton,
  SocialIcon,
  PasswordWrapper,
  ToggleBtn,
  FormSection,
  PhoneWrapper,
  ErrorText,
} from "./styles";

import sign from "../../assets/images/sign.png";
import logo from "../../assets/images/logo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/auth/login");
  };

  const handleSignIn = () => {
    navigate("/auth/login");
  };

  return (
    <Wrapper>
      <Container>
        <ImageSection>
          <BackgroundImage src={sign} alt="Car lot" />
        </ImageSection>

        <FormSection>
          <LogoWrapper>
            <Logo src={logo} alt="Logo" width="100" height="16" />
          </LogoWrapper>

          <Title>Sign in to your Account</Title>
          <Subtitle>Welcome back! please enter your detail</Subtitle>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <PhoneWrapper>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <PhoneInput
                      country={"pk"}
                      enableSearch
                      {...field}
                      inputProps={{
                        name: "phone",
                        required: true,
                        id: "phone",
                      }}
                    />
                  )}
                />
              </PhoneWrapper>
              {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
            </FormGroup>

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
                    message: "Invalid email address",
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
          value: /^(?=[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
          message:
            "Start with [A-Z],special character & include number,min 8 characters",
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
  {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
</FormGroup>


            <SubmitButton type="submit">Sign Up</SubmitButton>
          </Form>

          <DividerText>
            Already have an account?{" "}
            <Link as="span" style={{ cursor: "pointer" }} onClick={handleSignIn}>
              Sign In
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

export default Register;
