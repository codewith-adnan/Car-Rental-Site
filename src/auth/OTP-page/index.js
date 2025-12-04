import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  OTPForm,
  OTPInput,
  Timer,
  ContinueButton,
  ResendButton,
} from "./otp.styles";
import cover from "../../assets/images/Cover.png";
import logo from "../../assets/images/logo.png";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(59);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleResend = () => {
    setSeconds(59);
    setIsResendDisabled(true);
  };

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Container>
        <ImageSection>
          <BackgroundImage src={cover} alt="Car lot" />
        </ImageSection>
        <FormSection>
          <LogoWrapper>
            <Logo src={logo} alt="Main Logo" />
          </LogoWrapper>

          <Title>OTP Verification</Title>
          <Subtitle> Please enter the OTP code we have sent to your registered email </Subtitle>

          <OTPForm>
            {[...Array(6)].map((_, i) => (
              <OTPInput key={i} type="text" maxLength="1" defaultValue="5" />
            ))}
          </OTPForm>

          <Timer>{`0:${seconds < 10 ? `0${seconds}` : seconds}`}</Timer>
          <ContinueButton type="submit" onClick={() => goTo("/auth/newPassword")}> Continue </ContinueButton>
          <ResendButton onClick={handleResend} disabled={isResendDisabled}>Resend</ResendButton>
        </FormSection>
      </Container>
    </Wrapper>
  );
};

export default OtpVerification;
