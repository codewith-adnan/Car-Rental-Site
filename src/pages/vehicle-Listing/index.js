import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaGasPump,
  FaUserFriends,
  FaCogs,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import {
  Container,
  Sidebar,
  FilterGroup,
  Label,
  Select,
  RangeSlider,
  CheckboxGroup,
  Button,
  CarGrid,
  CarCard,
  CarImage,
  CarTitle,
  CarInfo,
  PriceTag,
  RentButton,
  Tag,
  PriceAndButtonRow,
} from "../vehicle-Listing/styles.js";

import swift from "../../assets/images/swift.png";
import wagnor from "../../assets/images/wagnor.png";
import rolls from "../../assets/images/rolls.png";

const VehicleListing = () => {
  const navigate = useNavigate();

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
      image: rolls,
      fav: true,
    },
    {
      title: "Swift",
      type: "Sport",
      fuel: "90L",
      trans: "Manual",
      seats: 4,
      price: 4000,
      image: swift,
      fav: false,
    },
    {
      title: "Wagon-R",
      type: "Sport",
      fuel: "80L",
      trans: "Manual",
      seats: 4,
      price: 3500,
      image: wagnor,
      fav: true,
    },
    {
      title: "Rolls - Royce",
      type: "Sedan",
      fuel: "70L",
      trans: "Manual",
      seats: 4,
              usdPrice: 999.00,
      price: 3000,
      image: rolls,
      fav: false,
    },
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
      image: rolls,
      fav: true,
    },
    {
      title: "Swift",
      type: "Sport",
      fuel: "90L",
      trans: "Manual",
      seats: 4,
        usdPrice: 100.00,    
      price: 4000,
      image: swift,
      fav: false,
    },
  ];

  return (
    <Container>
      <Sidebar>
        <FilterGroup>
          <Label>Make</Label>
          <Select>
            <option>Select Maker</option>
          </Select>

          <Label>Model</Label>
          <Select>
            <option>Select Model</option>
          </Select>

          <Label>Price Range per Day (PKR)</Label>
          <RangeSlider type="range" min="2500" max="15000" />

          <Label>Registration City</Label>
          <Select>
            <option>All</option>
          </Select>

          <Label>Car Document</Label>
          <Select>
            <option>All</option>
          </Select>

          <Label>Transmission</Label>
          <Select>
            <option>All</option>
          </Select>

          <Label>Condition</Label>
          <CheckboxGroup>
            <label>
              <input type="radio" name="Condition" /> New
            </label>
            <label>
              <input type="radio" name="Condition" /> Used
            </label>
          </CheckboxGroup>

          <Label>Fuel</Label>
          <CheckboxGroup>
            <label>
              <input type="radio" name="fuel" /> Petrol
            </label>
            <label>
              <input type="radio" name="fuel" /> Diesel
            </label>
            <label>
              <input type="radio" name="fuel" /> LPG
            </label>
            <label>
              <input type="radio" name="fuel" /> CNG
            </label>
            <label>
              <input type="radio" name="fuel" /> Electric
            </label>
            <label>
              <input type="radio" name="fuel" /> Hybrid
            </label>
          </CheckboxGroup>

          <Button>Apply</Button>
        </FilterGroup>
      </Sidebar>

      <CarGrid>
        {cars.map((car, index) => (
          <CarCard key={index}>
            <CarTitle>
              <div>
                <h4>{car.title}</h4>
                <Tag>{car.type}</Tag>

                {index === 0 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "4px",
                    }}
                  >
                    <FaStar color="#facc15" />
                    <FaStar color="#facc15" />
                    <FaStar color="#facc15" />
                    <FaStar color="#facc15" />
                    <FaRegStar color="grey" />
                    <span style={{ fontSize: "14px", color: "#555" }}>4.4</span>
                  </div>
                )}
              </div>
              <span
                style={{
                  color: car.fav ? "red" : "grey",
                  fontSize: "20px",
                  lineHeight: "1",
                  display: "inline-block",
                  border: "none",
                }}
              >
                {car.fav ? "❤️" : "♡"}
              </span>
            </CarTitle>

            <CarImage src={car.image} alt={car.title} />
            <CarInfo>
              <span>
                <FaGasPump style={{ marginRight: "6px" }} /> {car.fuel}
              </span>
              <span>
                <FaCogs style={{ marginRight: "6px" }} /> {car.trans}
              </span>
              <span>
                <FaUserFriends style={{ marginRight: "6px" }} /> {car.seats}{" "}
                People
              </span>
            </CarInfo>

           <PriceAndButtonRow>
  <PriceTag>
    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
      <span style={{ fontSize: "13px", color: "#0e0e0e", fontWeight: 500 }}>pkr.</span>
      <span style={{ fontSize: "22px", fontWeight: 700, color: "#0e0e0e" }}>{car.price}</span>
      <span style={{ fontSize: "16px", color: "#94a3b8", fontWeight: 500 }}>/ day</span>
    </div>
    {car.usdPrice && (
      <div style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "line-through", marginTop: "4px" }}>
        ${car.usdPrice.toFixed(2)}
      </div>
    )}
  </PriceTag>
  <RentButton onClick={() => navigate('/vehicle-Details')}>Rent Now</RentButton>

</PriceAndButtonRow>


          </CarCard>
        ))}
      </CarGrid>
    </Container>
  );
};

export default VehicleListing;
