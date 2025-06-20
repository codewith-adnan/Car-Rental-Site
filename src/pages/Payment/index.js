import React from "react";
import {
  FormContainer,
  LeftPanel,
  RightPanel,
  Section,
  SectionHeader,
  SubTitle,
  InputRow,
  Input,
  Label,
  SummaryCard,
  CarImage,
  CarTitle,
  CarDetails,
  PriceRow,
  TotalPrice,
  Checkbox,
  Button,
  StepText,
  BlurredSection,
  SafeContainer,
  IconImage,
  Title,
  Subtitle,
  RentalContainer,
  RentalCard,
  RentalRadioLabel,
  RentalInputGroup,
  RentalField,
  RentalFieldLabel,
  RentalSelect,
  RentalInput
} from "./styles";
import View1 from "../../assets/images/View1.png"; 
import safe from "../../assets/images/safe.png"; 

const RentalForm = () => {
  return (
    <FormContainer>
      <LeftPanel>
        <Section>
          <SectionHeader>
            <div>
              <h3>Billing Info</h3>
              <SubTitle>Please enter your billing info</SubTitle>
            </div>
            <StepText>Step 1 of 4</StepText>
          </SectionHeader>
          <InputRow>
            <Input>
              <Label>Your name</Label>
              <input type="text" placeholder="Your name" />
            </Input>
            <Input>
              <Label>Phone number</Label>
              <input type="text" placeholder="Phone number" />
            </Input>
          </InputRow>
          <InputRow>
            <Input>
              <Label>Address</Label>
              <input type="text" placeholder="Address" />
            </Input>
            <Input>
              <Label>Town or city</Label>
              <input type="text" placeholder="Town or city" />
            </Input>
          </InputRow>
        </Section>

        <Section>
          <SectionHeader>
            <div>
              <h3>Rental Info</h3>
              <SubTitle>Please select your rental date</SubTitle>
            </div>
            <StepText>Step 2 of 4</StepText>
          </SectionHeader>

          <RentalContainer>
            <RentalCard>
              <RentalRadioLabel>
                <input type="radio" name="rentalType" value="pickup" defaultChecked />
                Pick-Up
              </RentalRadioLabel>
              <RentalInputGroup>
                <RentalField>
                  <RentalFieldLabel>City</RentalFieldLabel>
                  <RentalSelect>
                    <option>Select your city</option>
                  </RentalSelect>
                </RentalField>
                <RentalField>
                  <RentalFieldLabel>Date</RentalFieldLabel>
                  <RentalInput style={{width:'96%'}}  type="date" />
                </RentalField>
              </RentalInputGroup>
              <RentalField>
                <RentalFieldLabel>Time</RentalFieldLabel>
                <RentalInput type="time" />
              </RentalField>
            </RentalCard>

            <RentalCard>
              <RentalRadioLabel>
                <input type="radio" name="rentalType" value="dropoff" />
                Drop-Off
              </RentalRadioLabel>
              <RentalInputGroup>
                <RentalField>
                  <RentalFieldLabel>City</RentalFieldLabel>
                  <RentalSelect>
                    <option>Select your city</option>
                  </RentalSelect>
                </RentalField>
                <RentalField>
                  <RentalFieldLabel>Date</RentalFieldLabel>
                  <RentalInput style={{width:'96%'}} type="date" />
                </RentalField>
              </RentalInputGroup>
              <RentalField>
                <RentalFieldLabel>Time</RentalFieldLabel>
                <RentalInput type="time" />
              </RentalField>
            </RentalCard>
          </RentalContainer>
        </Section>

        <BlurredSection>
          <SectionHeader>
            <div>
              <h3>Payment Method</h3>
              <SubTitle>Please enter your payment method</SubTitle>
            </div>
            <StepText>Step 3 of 4</StepText>
          </SectionHeader>

          <InputRow>
            <Input>
              <Label>Card Number</Label>
              <input type="text" placeholder="Cardnumber" />
            </Input>
            <Input>
              <Label>Expiration Date</Label>
              <input type="text" placeholder="MM / YY" />
            </Input>
          </InputRow>

          <InputRow>
            <Input>
              <Label>Card Holder</Label>
              <input type="text" placeholder="Cardholder" />
            </Input>
            <Input>
              <Label>CVC</Label>
              <input type="text" placeholder="CVC" />
            </Input>
          </InputRow>

          <InputRow style={{ flexDirection: "column", gap: "1rem" }}>
            <Checkbox>
              <input type="radio" name="payment" defaultChecked />
              <span>Credit Card</span>
              <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/32/mastercard.png" alt="MasterCard" />
            </Checkbox>

            <Checkbox>
              <input type="radio" name="payment" />
              <span>PayPal</span>
              <img src="https://img.icons8.com/color/32/paypal.png" alt="PayPal" />
            </Checkbox>

            <Checkbox>
              <input type="radio" name="payment" />
              <span>Bitcoin</span>
              <img src="https://img.icons8.com/color/32/bitcoin.png" alt="Bitcoin" />
            </Checkbox>
          </InputRow>
        </BlurredSection>

        <Section>
          <SectionHeader>
            <div>
              <h3>Confirmation</h3>
              <SubTitle>Just a few clicks and your rental is ready!</SubTitle>
            </div>
            <StepText>Step 4 of 4</StepText>
          </SectionHeader>
          <Checkbox>
            <input type="checkbox" />
            I agree with sending marketing and newsletter emails. No spam, promised!
          </Checkbox>
          <Checkbox>
            <input type="checkbox" />
            I agree with our terms and conditions and privacy policy.
          </Checkbox>
          <Button>Rent Now</Button>
          <br />
          <SafeContainer>
            <IconImage src={safe} alt="Shield Icon" />
            <Title>All your data are safe</Title>
            <Subtitle>
              We are using the most advanced security to provide you the best experience ever.
            </Subtitle>
          </SafeContainer>
        </Section>
      </LeftPanel>

      <RightPanel>
        <SummaryCard>
          <h3>Rental Summary</h3>
          <SubTitle>Prices may change depending on the rental length and car price.</SubTitle>
          <CarImage src={View1} alt="Car" />
          <CarTitle>Nissan GT – R</CarTitle>
          <CarDetails>⭐⭐⭐⭐ 440+ Reviewer</CarDetails>
          <PriceRow>
            <span>Subtotal</span>
            <span>$80.00</span>
          </PriceRow>
          <PriceRow>
            <span>Tax</span>
            <span>$0</span>
          </PriceRow>
          <TotalPrice>
            <div>Total Rental Price</div>
            <div>$80.00</div>
          </TotalPrice>
          <SubTitle>Overall price and includes rental discount</SubTitle>
        </SummaryCard>
      </RightPanel>
    </FormContainer>
  );
};

export default RentalForm;
