
import styled from 'styled-components';


 

 
// Car Banner




export const HeroSection = styled.section`
  font-family: 'poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

export const CarImage5 = styled.img`
  width: 100%;
`;

export const GraphicsBehind = styled.div`
  position: absolute;
  left: 60px;
  top: 100px;
  width: 100px;
  height: 100px;
  z-index: 1;
  transform: rotate(35deg);
  border-radius: 20px;
  filter: blur(30px);
`;

export const TextContent5 = styled.div`
  position: absolute;
  width: 20%;
  top: 48%;
  right: 7px;

  @media(max-width: 768px) {
    width: 90%;
    position: static;
    margin-top: 30px;
    text-align: center;
  }
`;

export const Title5 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;

  @media(max-width: 768px) {
    font-size: 24px;
  }
`;

export const SubTitle5 = styled.p`
  font-size: 26px;
  color: #333;
  width: 70%;
  margin-bottom: 20px;

  @media(max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const RentButton5 = styled.button`
  padding: 10px 34px;
  background-color: #3366ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1e50ff;
  }
`;

//  Rent a Car Section

export const CarSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CarImage2 = styled.img`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 50%;
  top: 50px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    top: 2;
    margin-bottom: 1rem;
  }
`;

export const Article = styled.article`
  position: absolute;
  width: 20%;
  top: 50%;
  margin-left: 50rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    position: static; 
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    top: 0;
    text-align: center;
    font-size:1rem;
  }
`;

export const Heading2 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #000;
  width: auto;
  line-height: 1;
  flex-wrap: wrap;
`;

export const Paragraph2 = styled.p`
  margin-top: 0rem;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.5;
  flex-wrap: wrap;
`;

export const ArticleWrapper = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;


// feel the best experiences
export const PageContainer = styled.div`
  background-color: #f3f6fa;
  min-height: 66vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 5rem;
  justify-content: center;
  padding: 1.5rem;
  font-family: 'poppins';

 
`;

export const Section = styled.section`
  background-color: white;
  flex-wrap: wrap;
  max-width: 90rem;
  width: 94%;
  padding: 3rem 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  color: black;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 2.25rem;
  max-width: 50rem;
  margin: 0 auto 3rem;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: space-evenly;
  max-width: 70rem;
  margin: 0 auto;
  @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    }
`;

export const Feature = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 19rem;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.72rem;

  img {
    position: absolute;
    width: 92%;
    height: 77%;
    object-fit: cover;
    z-index: 0;
  }

  svg {
    z-index: 1;
  }
`;



export const FeatureTitle = styled.h3`
  color: #3b63f5;
  font-weight: 600;
  font-size: 1.50rem;
  margin-bottom: 0.5rem;
  margin-top: 0rem;
`;

export const FeatureDescription = styled.p`
  color: #4b5563;
  font-size: 0.900rem;
  line-height: 1.25rem;
  max-width: 13.75rem;
  margin-bottom: 0rem;
`;


// Car Cards

export const Container = styled.div`
  padding: 2rem;
  background: #f8fafc;
  font-family: 'poppins';
  margin-top: 3rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0rem;

  h4 {
    color:rgb(140, 142, 145);
    font-weight: 500;
  }

  p {
    color:rgb(18, 106, 248);
    font-size: 14px;
    text-decoration: none;
  }
`;

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 31px;
`;

export const CarCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
`;

export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
`;

export const Tag = styled.span`
  font-size: 12px;
  color: #64748b;
`;

export const CarImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 12px;
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PriceAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const PriceTag = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RentButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;

//  driver Section



export const DriverWrapper = styled.section`
  font-family: 'Poppins', sans-serif;
  position: relative;
  background-color: #f3f6fa;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 0 auto;
  bottom: 5rem;
  width: 100%;
`;

export const DriverImage = styled.img`
  width: 94%;
  height: 450px;
  object-fit: cover;
`;

export const DriverOverlay = styled.div`
  position: absolute;
  inset: 0;
  margin-left: 4rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 3rem;
  }
`;

export const DriverTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  max-width: 40rem;
  margin-top: 0rem;
  margin-bottom: 5rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

export const DriverForm = styled.form`
  margin-top: 2rem;
  max-width: 40rem;
  position: relative;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const DriverEmailLabel = styled.label`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  display: block;
`;

export const DriverInputGroup = styled.div`
  position: relative;
  width: 90%;
  border-radius: 1rem;
  border: 8px solid white;
  display: flex;
  align-items: center;
    margin-right: 30rem;


  &:focus-within {
    border-color: white;
  }
`;

export const DriverEmailInput = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  padding-right: 7rem; 
  color: rgb(114, 114, 114);
  outline: none;
  border: none;
  border-radius: 0rem;
  width: 100%;
`;

export const DriverSubmitBtn = styled.button`
  position: absolute;
  right: 0rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #1e40af;
  color: white;
  padding: 0.6rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  width: 5rem;
  border-radius: 0.75rem;
  border: none;
  height: 2.90rem;
  white-space: nowrap;

  &:hover {
    background-color: #1e3a8a;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
`;
