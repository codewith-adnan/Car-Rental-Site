import React from "react";
import {
  PopupContainer,
  Card,
  ImageWrapper,
  CheckImage,
  Content,
  Heading,
  Subtext,
  ContinueButton,
} from "../Subscribe/styles";

import SubscribePic from "../../assets/images/SubscribePic.png";

const SubscribeSuc = ({ onClose }) => {
  return (
    <PopupContainer>
      <Card>
        <ImageWrapper>
          <CheckImage src={SubscribePic} alt="Success" />
        </ImageWrapper>
        <Content>
          <Heading>You Have Subscribe <br></br>Successfully</Heading>
          <Subtext>Now you will recieve the notification regarding <br></br> Recent Cars and other Opportunity</Subtext>
          <ContinueButton onClick={onClose}>Continue</ContinueButton>
        </Content>
      </Card>
    </PopupContainer>
  );
};

export default SubscribeSuc;
