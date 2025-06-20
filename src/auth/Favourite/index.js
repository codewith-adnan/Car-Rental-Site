import {
  Container,
  Title,
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
} from "./styles";
import { FaGasPump, FaUserFriends, FaCogs } from "react-icons/fa";

// Import images
import swift from "../../assets/images/swift.png";
import wagnor from "../../assets/images/wagnor.png";
import rolls from "../../assets/images/rolls.png";
import { useNavigate } from "react-router-dom";

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
        usdPrice: 100.0,

    price: 3000,
    image: rolls,
    fav: true,
  },
  
];

const FavouriteCar =() =>{
  const navigate = useNavigate();

  return (
    <Container>
            <Title><h4>
              Favourite
              </h4></Title>


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
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <span style={{ fontSize: "12px", color: "#000", fontWeight: 500 }}>pkr.</span>
                  </div>
                  <span style={{ fontSize: "22px", fontWeight: 700, color: "#0e0e0e" }}>
                    {car.price}
                  </span>
                  <span style={{ fontSize: "16px", color: "#94a3b8", fontWeight: 500 }}>/ day</span>
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
              <RentButton onClick={() => navigate ('/vehicle-Details')}>Rent Now</RentButton>
            </PriceAndButtonRow>
          </CarCard>
        ))}
      </CarGrid>
    </Container>
  )
}

export default FavouriteCar;




