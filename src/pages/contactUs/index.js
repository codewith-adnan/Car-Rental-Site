import React from 'react';
import {
  ContactContainer,
  InfoBox,
  InfoItem,
  InfoIcon,
  FormBox,
  InputGroup,
  InputField,
  Label,
  TextArea,
  SubmitButton,
  ContactTitle,
  ContactDescription,
  InfoText,
  InfoImage
} from './styles';

import {
  FaMobileAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <ContactContainer>
      <InfoBox>
        <ContactTitle>Contact Information</ContactTitle>
        <ContactDescription>
          Fill up the form and our Team will get back to you within 24 hours.
        </ContactDescription>
        <div>
          <InfoItem>
            <InfoIcon><FaMobileAlt size={20} /></InfoIcon>
            <InfoText>+92 3174103743</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaEnvelope size={20} /></InfoIcon>
            <InfoText>domain@paypal.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaGlobe size={20} /></InfoIcon>
            <InfoText>https://paypal.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaMapMarkerAlt size={20} /></InfoIcon>
            <InfoText>Rahim Yar Khan</InfoText>
          </InfoItem>
        </div>
        <InfoImage
          src="https://storage.googleapis.com/a1aa/image/8cdbaecb-2b81-4bb6-70c3-0ea49c87e73f.jpg"
          alt="Decorative"
        />
      </InfoBox>

      <FormBox>
        <InputGroup>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <InputField id="firstName" type="text" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <InputField id="lastName" type="text" />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <Label htmlFor="email">Email</Label>
            <InputField id="email" type="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <InputField id="phone" type="tel" />
          </div>
        </InputGroup>
        <div>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" rows="6" placeholder="Write your message..." />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SubmitButton type="submit">Get a Quote</SubmitButton>
        </div>
      </FormBox>
    </ContactContainer>
  );
};

export default ContactUs;