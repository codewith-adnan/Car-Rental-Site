import React, { useState, } from "react";
import { useNavigate } from 'react-router-dom'; 


import {
  Container,
  CardWrapper,
  LeftSection,
  MainImage,
  ThumbnailContainer,
  Thumbnail,
  RightSection,
  Header,
  Title,
  HeartIcon,
  Rating,
  StarIcon,
  ReviewerText,
  Description,
  DetailsGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
  PriceSection,
  Price,
  PriceUnit,
  OldPrice,
  RentButton,
  CarContainer,
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
  CarRentButton,
  TopCarCard,
  TopCarTitle,
  TopTag,
  TopCarImage,
  TopCarInfo,
  TopInfoItem,
  TopPriceAndButtonRow,
  TopPriceTag,
  TopCarRentButton,
  TopRatedContainer,
  TopRatedHeader,
  TopRatedGrid,
} from '../vehicle-Details/styles.js';
import {CatalogArticle, CatalogName,CatalogNameBlock,CatalogRating,CatalogRole,
  CatalogContent, CatalogHeader,CatalogHeading,CatalogImage,
  CatalogCount,CatalogDate,CatalogDescription, CatalogSection,CatalogShowAll,CatalogTop,} from '../vehicle-Details/styles.js';

import { FaRegStar,FaHeart, FaStar, FaGasPump, FaUserFriends, FaCogs } from 'react-icons/fa';

import main from '../../assets/images/main.jpg';
import View1 from '../../assets/images/View1.png';
import View2 from '../../assets/images/View2.png';
import View3 from '../../assets/images/View 3.png';
import View4 from '../../assets/images/View4.png';
import View5 from '../../assets/images/View5.png';

// Car Images
import Koenigsegg from '../../assets/images/Koenigsegg.png';
import GTR from '../../assets/images/GTR.png';
import RollsRoyce from '../../assets/images/RollsRoyce.png';
import RollsRoyce2 from '../../assets/images/RollsRoyce2.png';
import AllNewRush from '../../assets/images/AllNewRush.png';
import CRV from '../../assets/images/CRV.png';
import AllNewTerios from '../../assets/images/AllNewTerios.png';
import AllNewTeriosM from '../../assets/images/AllNewTeriosM.png'; 

// Profile Pictueres
import Alex from '../../assets/images/Alex.png';
import Skylar from '../../assets/images/Skylar.png';

const recentcars = [
  {
    title: 'Koenigsegg',
    type: 'Sport',
    fuel: '90L',
    trans: 'Manual',
    seats: 4,
    price: 4000,
    image: Koenigsegg,
    fav: true,
  },
  {
    title: 'Nissan GT - R',
    type: 'Sport',
    fuel: '80L',
    trans: 'Manual',
    seats: 4,
    price: 3500,
    image: GTR,
    fav: false,
  },
  {
    title: 'Rolls - Royce',
    type: 'Sedan',
    fuel: '70L',
    trans: 'Manual',
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: RollsRoyce,
    fav: true,
  },
  {
    title: 'Rolls-Royce',
    type: 'Sport',
    fuel: '80L',
    trans: 'Manual',
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: RollsRoyce2,
    fav: false,
  },
];

const topcars = [
  {
    title: 'All New Rush',
    type: 'Sport',
    fuel: '90L',
    trans: 'Manual',
    seats: 4,
    price: 4000,
    image: AllNewRush,
    fav: true,
  },
  {
    title: 'CR  - V',
    type: 'Sport',
    fuel: '80L',
    trans: 'Manual',
    seats: 4,
    price: 3500,
    image: CRV,
    fav: false,
  },
  {
    title: 'All New Terios',
    type: 'Sedan',
    fuel: '70L',
    trans: 'Manual',
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: AllNewTerios,
    fav: true,
  },
  {
    title: 'All New Terios',
    type: 'Sport',
    fuel: '80L',
    trans: 'Manual',
    seats: 4,
    price: 3000,
    usdPrice: 100.0,
    image: AllNewTeriosM,
    fav: false,
  },
];

const VehicleDetail = () => {
    const navigate = useNavigate();

    const thumbnails = [View1, View2, View3, View4, View5];
  const [selectedImage, setSelectedImage] = useState(main);

  return (
    <>
     <Container>
      <CardWrapper>
        <LeftSection>
          <MainImage src={selectedImage} alt="Main car" />
          <ThumbnailContainer>
            {thumbnails.map((thumb, idx) => (
              <Thumbnail
                key={idx}
                src={thumb}
                alt={`Thumb ${idx + 1}`}
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </ThumbnailContainer>
        </LeftSection>

        <RightSection>
          <div>
            <Header>
              <Title>Nissan GT - R</Title>
              <HeartIcon>
                <FaHeart />
              </HeartIcon>
            </Header>
            <Rating>
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i}>
                  <FaStar />
                </StarIcon>
              ))}
              <StarIcon inactive>
                <FaStar />
              </StarIcon>
              <ReviewerText>440+ Reviewer</ReviewerText>
            </Rating>
            <Description>
              NISMO has become the embodiment of Nissan’s outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </Description>
            <DetailsGrid>
              <DetailItem>
                <DetailLabel>Type Car</DetailLabel>
                <DetailValue>Sport</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Capacity</DetailLabel>
                <DetailValue>2 Person</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Steering</DetailLabel>
                <DetailValue>Manual</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Gasoline</DetailLabel>
                <DetailValue>70L</DetailValue>
              </DetailItem>
            </DetailsGrid>
          </div>

          <PriceSection>
            <div>
              <Price>$80.00</Price>
              <PriceUnit>/ days</PriceUnit>
              <OldPrice>$100.00</OldPrice>
            </div>
            <RentButton onClick={() => navigate('/Payment')}>Rent Now</RentButton>

          </PriceSection>
        </RightSection>
      </CardWrapper>
    </Container>

    {/* CatalogTop */}
    <CatalogSection aria-label="Customer reviews">
      <CatalogHeader>
        <CatalogHeading>Reviews</CatalogHeading>
        <CatalogCount>13</CatalogCount>
      </CatalogHeader>

      {[{
        name: 'Alex Stanton',
        role: 'CEO at Bukalapak',
        date: '21 July 2022',
        image: Alex,
        description: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rating: 4
      }, {
        name: 'Skylar Dias',
        role: 'CEO at Amazon',
        date: '20 July 2022',
        image: Skylar,
        description: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rating: 4
      }].map((review, index) => (
        <CatalogArticle key={index}>
          <CatalogImage src={review.image} alt={`Portrait of ${review.name}`} />
          <CatalogContent>
            <CatalogTop>
              <CatalogNameBlock>
                <CatalogName>{review.name}</CatalogName>
                <CatalogRole>{review.role}</CatalogRole>
              </CatalogNameBlock>
              <CatalogDate>{review.date}</CatalogDate>
            </CatalogTop>
            <CatalogDescription>{review.description}</CatalogDescription>
            <CatalogRating>
              {[...Array(5)].map((_, i) =>
                i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </CatalogRating>
          </CatalogContent>
        </CatalogArticle>
      ))}

      <CatalogShowAll aria-label="Show all reviews">
        Show All
        <svg width="12" height="12" fill="none" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </CatalogShowAll>
    </CatalogSection>

      {/* Recent Cars */}
      <CarContainer>
        <SectionHeader>
          <h4>Recent Cars</h4>
          <p>View All</p>
        </SectionHeader>
        <CarGrid>
          {recentcars.map((car, index) => (
            <CarCard key={index}>
              <CarTitle>
                <div>
                  <h4>{car.title}</h4>
                  <Tag>{car.type}</Tag>
                </div>
                <span style={{ color: car.fav ? 'red' : '#cbd5e1', fontSize: '20px' }}>
                  {car.fav ? '❤️' : '♡'}
                </span>
              </CarTitle>
              <CarImage src={car.image} alt={car.title} />
              <CarInfo>
                <InfoItem><FaGasPump /> {car.fuel}</InfoItem>
                <InfoItem><FaCogs /> {car.trans}</InfoItem>
                <InfoItem><FaUserFriends /> {car.seats} People</InfoItem>
              </CarInfo>
              <PriceAndButtonRow>
                <PriceTag>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '12px' }}>pkr.</span>
                    <span style={{ fontSize: '22px', fontWeight: 700 }}>{car.price}</span>
                    <span style={{ fontSize: '16px', color: '#94a3b8' }}>/ day</span>
                  </div>
                  {car.usdPrice && (
                    <div style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      ${car.usdPrice.toFixed(2)}
                    </div>
                  )}
                </PriceTag>
                <CarRentButton onClick={()=> navigate('/Payment')}>Rent Now</CarRentButton>
              </PriceAndButtonRow>
            </CarCard>
          ))}
        </CarGrid>
      </CarContainer>

      {/* Top Rated Cars */}
      <TopRatedContainer>
        <TopRatedHeader>
          <h4>Top Rated Cars</h4>
          <p>View All</p>
        </TopRatedHeader>
        <TopRatedGrid>
          {topcars.map((car, index) => (
            <TopCarCard key={index}>
              <TopCarTitle>
                <div>
                  <h4>{car.title}</h4>
                  <TopTag>{car.type}</TopTag>
                </div>
                <span style={{ color: car.fav ? 'red' : '#cbd5e1', fontSize: '20px' }}>
                  {car.fav ? '❤️' : '♡'}
                </span>
              </TopCarTitle>
              <TopCarImage src={car.image} alt={car.title} />
              <TopCarInfo>
                <TopInfoItem><FaGasPump /> {car.fuel}</TopInfoItem>
                <TopInfoItem><FaCogs /> {car.trans}</TopInfoItem>
                <TopInfoItem><FaUserFriends /> {car.seats} People</TopInfoItem>
              </TopCarInfo>
              <TopPriceAndButtonRow>
                <TopPriceTag>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '12px' }}>pkr.</span>
                    <span style={{ fontSize: '22px', fontWeight: 700 }}>{car.price}</span>
                    <span style={{ fontSize: '16px', color: '#94a3b8' }}>/ day</span>
                  </div>
                  {car.usdPrice && (
                    <div style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      ${car.usdPrice.toFixed(2)}
                    </div>
                  )}
                </TopPriceTag>
                <TopCarRentButton onClick={()=> navigate('/Payment')}>Rent Now</TopCarRentButton>
              </TopPriceAndButtonRow>
            </TopCarCard>
          ))}
        </TopRatedGrid>
      </TopRatedContainer>
    </>
  );
};

export default VehicleDetail;
