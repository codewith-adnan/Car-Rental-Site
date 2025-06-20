import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SubscribeSuc from "../../Models/Subscribe/index"; 
import iconBg from '../../assets/images/iconBg.png'; 


import {
  PageContainer,
  Section,
  Title,
  FeaturesWrapper,
  Feature,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  CarImage2,
  Article,
  Heading2,
  Paragraph2,
  CarImage5,
  TextContent5,
  Title5,
  SubTitle5,
  RentButton5,
  DriverWrapper,
  DriverImage,
  DriverOverlay,
  DriverTitle,
  DriverForm,
  DriverEmailLabel,
  DriverInputGroup,
  DriverEmailInput,
  DriverSubmitBtn,
  Container,
  SectionHeader,
  CarGrid,
  CarCard,
  CarTitle,
  Tag,
  CarImage,
  CarInfo,
  InfoItem,
  PriceAndButtonRow,
  PriceTag,
  RentButton,
  CarSection,
  ArticleWrapper,
} from "./Home.styles";

import banner1 from "../../assets/images/banner1.png";
import rentit from "../../assets/images/rentit.png";
import driverBg from "../../assets/images/driverBg.png";

import swift from "../../assets/images/swift.png";
import wagnor from "../../assets/images/wagnor.png";
import rolls from "../../assets/images/rolls.png";
import nissan from "../../assets/images/nissan.png";

import { FaBriefcase, FaCog, FaUsers, FaGasPump, FaUserFriends, FaCogs } from "react-icons/fa";

const cars = [
  {
    title: "Swift",
    type: "Sport",
    fuel: "90L",
    trans: "Manual",
    seats: 4,
    price: 4000,
    image: swift,
    fav: true,
  },
  {
    title: "Wagon-R",
    type: "Sport",
    fuel: "80L",
    trans: "Manual",
    seats: 4,
    price: 3500,
    image: wagnor,
    fav: false,
  },
  {
    title: "Rolls - Royce",
    type: "Sedan",
    fuel: "70L",
    trans: "Manual",
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: rolls,
    fav: true,
  },
  {
    title: "Nissan GT–R",
    type: "Sport",
    fuel: "80L",
    trans: "Manual",
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: nissan,
    fav: false,
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <> 
      {/* Car Banner */}
      <div style={{ padding: "0px 20px", position: "relative" }}>
        <div>
          <CarImage5 src={banner1} />
        </div>
        <div>
          <TextContent5>
            <Title5>Safer, Faster And Comfortable</Title5>
            <SubTitle5>Get in touch with our luxury cars</SubTitle5>
            <RentButton5 onClick={() => navigate("/vehicle-Details")}>
              Rent Now
            </RentButton5>
          </TextContent5>
        </div>
      </div>

      {/* Rent a Car Section */}
       <CarSection>
      <div>
        <CarImage2 src={rentit} alt="White convertible car" />
      </div>
      <ArticleWrapper>
        <Article>
          <Heading2>Rent a Car</Heading2>
          <Paragraph2>
            We pride ourselves in always going the extra mile for our customers.
          </Paragraph2>
        </Article>
      </ArticleWrapper>
    </CarSection>

      {/* Car Cards */}
      <Container>
        <SectionHeader>
          <h4>Popular Car</h4>
          <p>View All</p>
        </SectionHeader>

        <CarGrid>
          {cars.map((car, index) => (
            <CarCard key={index}>
              <CarTitle>
                <div>
                  <h4>{car.title}</h4>
                  <Tag>{car.type}</Tag>
                </div>
                <span
                  style={{
                    color: car.fav ? "red" : "#cbd5e1",
                    fontSize: "20px",
                  }}
                >
                  {car.fav ? "❤️" : "♡"}
                </span>
              </CarTitle>

              <CarImage src={car.image} alt={car.title} />

              <CarInfo>
                <InfoItem>
                  <FaGasPump /> {car.fuel}
                </InfoItem>
                <InfoItem>
                  <FaCogs /> {car.trans}
                </InfoItem>
                <InfoItem>
                  <FaUserFriends /> {car.seats} People
                </InfoItem>
              </CarInfo>

              <PriceAndButtonRow>
                <PriceTag>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <sub>pkr/</sub>
                    </div>
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#0e0e0e",
                      }}
                    >
                      {car.price}
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#94a3b8",
                        fontWeight: 500,
                      }}
                    >
                      / day
                    </span>
                  </div>
                  {car.usdPrice && (
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#94a3b8",
                        textDecoration: "line-through",
                        marginTop: "4px",
                      }}
                    >
                      ${car.usdPrice.toFixed(2)}
                    </div>
                  )}
                </PriceTag>
                <RentButton onClick={() => navigate("/vehicle-Details")}>
                  Rent Now
                </RentButton>
              </PriceAndButtonRow>
            </CarCard>
          ))}
        </CarGrid>
      </Container>

      {/* Features Section */}
      <PageContainer>
        <Section>
          <Title>Feel the best experience with our luxury car</Title>
          <FeaturesWrapper>
            <Feature>
              <IconWrapper > 
                  <img src={iconBg} alt="icon background" />

                <FaBriefcase size={24} color="white" />
              </IconWrapper>
              <FeatureTitle>Book with flexibility</FeatureTitle>
              <FeatureDescription>
                Easily find car and book with no change fees.
              </FeatureDescription>
            </Feature>

            <Feature>
              <IconWrapper >
                  <img src={iconBg} alt="icon background" />

                <FaCog size={24} color="white" />
              </IconWrapper>
              <FeatureTitle>Trusted and free</FeatureTitle>
              <FeatureDescription>
                We’re completely free to use – no hidden charges or fees.
              </FeatureDescription>
            </Feature>

            <Feature>
              <IconWrapper >
                  <img src={iconBg} alt="icon background" />

                <FaUsers size={24} color="white" />
              </IconWrapper>
              <FeatureTitle>We know travel</FeatureTitle>
              <FeatureDescription>
                With 10 years of experience, we’re ready to help find your
                perfect car.
              </FeatureDescription>
            </Feature>
          </FeaturesWrapper>
        </Section>
      </PageContainer>

      {/* Driver Section */}
      <DriverWrapper style={{position:"relative"}}>
        <DriverImage src={driverBg} alt="Driver steering at night" />
        <DriverOverlay>
          <DriverTitle>
            Become A Driver
            <br />
            Your Time. Your Goals. You're The Boss.
          </DriverTitle>
          <DriverForm onSubmit={handleSubmit}>
            <DriverEmailLabel htmlFor="email">Subscription</DriverEmailLabel>
            <DriverInputGroup>
              <DriverEmailInput
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <DriverSubmitBtn type="submit">Next</DriverSubmitBtn>
            </DriverInputGroup>
          </DriverForm>
        </DriverOverlay>
         {showModal && <SubscribeSuc onClose={closeModal} />}

      </DriverWrapper>
           
    </>
  );
};

export default LandingPage;
