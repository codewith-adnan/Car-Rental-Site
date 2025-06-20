import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  font-family: 'poppins';
  gap: 2rem;
  padding: 2rem;
  background: #f9fbfc;
`;

export const LeftPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightPanel = styled.div`
  flex: 1;
`;

export const Section = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

export const StepText = styled.span`
  color: #aaa;
  font-size: 0.9rem;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const Input = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  input, select {
    padding: 0.8rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const SummaryCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const CarImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const CarTitle = styled.h4`
  margin: 0.5rem 0 0.2rem 0;
`;

export const CarDetails = styled.p`
  color: #777;
  font-size: 0.85rem;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;

  input {
    width: 16px;
    height: 16px;
  }
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

export const BlurredSection = styled.section`
  opacity: 0.4;
  filter: blur(1.5px);
  pointer-events: none;
  user-select: none;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
`;



// export const BlurredSectionShow = styled.section`
// //   opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
// //   filter: ${({ isActive }) => (isActive ? 'none' : 'blur(1.5px)')};
// //   pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
// //   user-select: none;
// //   transition: all 0.3s ease-in-out;
// //   background-color: #ffffff;
// //   padding: 2rem;
// //   border-radius: 12px;
// //   margin-top: 2rem;
// // `;


// safety 


export const SafeContainer = styled.div`
  text-align: left;
  max-width: 400px;
  padding: 20px;
  font-family: 'poppins';
`;

export const IconImage = styled.img`
  width: 28px;
  height: 28px;
  margin-bottom: 0px;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #000;
  margin-top: 0rem;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #7b8db0;
  margin: 0;


`;

export const RentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: 'poppins';
`;

export const RentalCard = styled.div`
  background: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const RentalRadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

export const RentalInputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const RentalField = styled.div`
  flex: 1 1 45%;
  margin-top: 1rem;
`;

export const RentalFieldLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b5563;
  display: block;
  margin-bottom: 0.5rem;
`;

export const RentalSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
`;

export const RentalInput = styled.input`
  width: 46%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
`;

