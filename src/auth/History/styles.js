import styled from "styled-components";

export const HistoryWrapper = styled.div`
  padding: 20px;
  background-color: #f8f9fb;
  height:  100vh;
  

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

export const HistoryTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const HistorySubtitle = styled.p`
  text-align: center;
  color: #7a7a7a;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 520px;
  height: 205px;
  flex-direction: column;

  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    padding: 16px;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const CarTitle = styled.h4`
  font-weight: bold;
  margin: 0;
  font-size: 16px;
`;

export const CarCategory = styled.span`
  font-size: 14px;
  color: #6495ed;
`;

export const ImageLocationRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;

export const CarImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0rem;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const LocationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const LocationLabel = styled.p`
  font-weight: 500;
  margin: 2px 0 10px;
  color: #333;
`;

export const LocationText = styled.p`
  margin: 0;
  color: #888;
  font-size: 13px;
`;

export const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #888;
  font-weight: 600;

  &::before {
    content: '';
    flex: 1;
    border-bottom: 1px dashed #ccc;
    margin-right: 8px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 15px;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const RentDetails = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-top: 0rem;
`;

export const RentPrice = styled.span`
  font-weight: 600;
  margin-top: 0rem;

  strong {
    font-weight: 700;
    color: #000;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-weight: bold;
`;

export const ReturnButton = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ReRentButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

export const FeatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 2rem;
  color: #777;
  margin-top: 0rem;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
