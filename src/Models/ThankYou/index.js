import React, { useState } from "react";
import {
  Overlay,
  PopupContainer,
  TopBar,
  Title,
  Subtitle,
  StarsWrapper,
  Star,
  TextArea,
  CharCount,
  SendButton,
} from "./styles";

const ThankYou = ({ onClose }) => {
  const [message, setMessage] = useState("Hey Adnan!");
  const maxChars = 256;

  const handleSend = () => {
    onClose();
  };

  return (
    <Overlay>
      <PopupContainer>
        <TopBar />
        <Title>Thank you!</Title>
        <Subtitle>Please rate your trip</Subtitle>
        <StarsWrapper>
          <Star active>★</Star>
          <Star active>★</Star>
          <Star active>★</Star>
          <Star active>★</Star>
          <Star>★</Star>
        </StarsWrapper>
        <TextArea rows={4} maxLength={maxChars} value={message} onChange={(e) => setMessage(e.target.value)}placeholder="Write your message here ..." />
        <CharCount>
          {message.length}/{maxChars - 1}
        </CharCount>
        <SendButton onClick={handleSend}>Send</SendButton>
      </PopupContainer>
    </Overlay>
  );
};

export default ThankYou;
