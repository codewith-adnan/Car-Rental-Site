import React, { useState } from "react";
import {
  HistoryWrapper,
  HistoryTitle,
  HistorySubtitle,
  CardsWrapper,
  Card,
  CarInfo,
  CarTitle,
  CarCategory,
  ActionButtons,
  CancelButton,
  ReturnButton,
  ReRentButton,
  ImageLocationRow,
  CarImage,
  LocationColumn,
  LocationLabel,
  LocationText,
  DividerWithText,
  BottomRow,
  RentDetails,
  RentPrice,
  FeatureRow,
  FeatureItem,
} from "./styles";

import swift from "../../assets/images/swift.png";
import { FaUsers, FaGasPump, FaCogs } from "react-icons/fa";
import ThankYou from "../../Models/ThankYou";
import CancelPopup from "../../Models/CancelPopup";
import AlertCancel from "../../Models/AlertCancel";

const cars = [
  {
    id: 1,
    title: "Nissan GT - R",
    category: "Sport",
    pickup: "Pickup Piont",
    dropoff: "Drop Off",
    duration: "4 Days",
    price: "$99.00",
    image: swift,
    status: "active",
  },
  {
    id: 2,
    title: "Nissan GT - R",
    category: "Sport",
    pickup: "Pickup Piont",
    dropoff: "Drop Off",
    duration: "4 Days",
    price: "$99.00",
    image: swift,
    status: "completed",
  },
];

const History = () => {
  const [popupType, setPopupType] = useState(null);
  const [showAlertCancel, setShowAlertCancel] = useState(false);

  const handleReturnClick = () => {
    setPopupType("thankyou");
  };

  const handleCancelClick = () => {
    setPopupType("cancelpopup");
  };

  const closePopup = () => {
    setPopupType(null);
  };

  return (
    <HistoryWrapper>
      <HistoryTitle>History</HistoryTitle>
      <HistorySubtitle>
        Here you can see the history of rent cars that you used
      </HistorySubtitle>

      <CardsWrapper>
        {cars.map((car) => (
          <Card key={car.id}>
            <CarInfo>
              <div>
                <CarTitle>{car.title}</CarTitle>
                <CarCategory>{car.category}</CarCategory>
              </div>

              {car.status === "active" ? (
                <ActionButtons>
                  <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
                  <ReturnButton onClick={handleReturnClick}>Return</ReturnButton>
                </ActionButtons>
              ) : (
                <ReRentButton>Re-Rent</ReRentButton>
              )}
            </CarInfo>

            <ImageLocationRow>
              <CarImage src={car.image} alt={car.title} />

              <LocationColumn>
                <div>
                  <LocationLabel>London Bridge</LocationLabel>
                  <LocationText>{car.pickup}</LocationText>
                </div>

                <DividerWithText>{car.duration}</DividerWithText>

                <div>
                  <LocationLabel>King George</LocationLabel>
                  <LocationText>{car.dropoff}</LocationText>
                </div>
              </LocationColumn>
            </ImageLocationRow>

            <BottomRow>
              <FeatureRow>
                <FeatureItem><FaGasPump /> 80L</FeatureItem>
                <FeatureItem><FaCogs /> Manual</FeatureItem>
                <FeatureItem><FaUsers /> 2 People</FeatureItem>
              </FeatureRow>

              <RentDetails>
                <RentPrice>
                  Price <strong>{car.price}</strong> / day
                </RentPrice>
              </RentDetails>
            </BottomRow>
          </Card>
        ))}
      </CardsWrapper>

      {popupType === "thankyou" && <ThankYou onClose={closePopup} />}
      {popupType === "cancelpopup" && (
        <CancelPopup
          onClose={closePopup}
          onConfirmCancel={() => {
            setPopupType(null);
            setShowAlertCancel(true);
          }}
        />
      )}
      {showAlertCancel && <AlertCancel onClose={() => setShowAlertCancel(false)} />}
    </HistoryWrapper>
  );
};

export default History;
