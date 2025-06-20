import styled from "styled-components";
export const Container = styled.div`
font-family: 'poppins';
  padding: 2rem;
  background:rgb(246, 249, 252);
  height: 100vh;
`;

export const Title = styled.h5`
  background: white;
  padding: 1px 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-weight: 400;
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
  gap: 40px;
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