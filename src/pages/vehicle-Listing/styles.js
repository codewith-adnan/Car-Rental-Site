import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background: #f9f9f9;
  font-family: 'poppins';
`;

export const Sidebar = styled.div`
  width: 280px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  margin-right: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const RangeSlider = styled.input`
  width: 100%;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;


export const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const CarGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

export const CarCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarImage = styled.img`
  height: 120px;
  object-fit: contain;
`;

export const CarTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  h4 {
    margin: 0;
    font-size: 16px;
  }
`;

export const Tag = styled.span`
  font-size: 12px;
  color: #c1bcbc;
`;

export const CarInfo = styled.div`
  display: flex;
  gap: 10px;
  font-size: 15px;
  color: #555;
  margin: 10px 0;
    color:rgb(175, 175, 175);

`;

export const PriceTag = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RentButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
export const PriceAndButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px; 
  margin-top: 10px;
`;