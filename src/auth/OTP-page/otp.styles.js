import styled from "styled-components";

export const Container = styled.div`
  font-family: 'poppins';
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 420px) {
    display: none;
    
  }
`;

export const ImageOverlay = styled.img`
  width: 100%;
  height: 100vh;
`;



export const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 9rem;
  margin-bottom: 1.5rem;
    margin-top: 2rem;

`;

export const Title = styled.h2`
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 20rem;
`;

export const OTPForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const OTPInput = styled.input`
  width: 2.50rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  color: #374151;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px #2563eb50;
  }
`;

export const Timer = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const ContinueButton = styled.button`
  width: 50%;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  height: 2.75rem;
  cursor: pointer;
  padding: 0.700rem 0;
  border-radius: 0.375rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ResendButton = styled.button`
  margin-top: 1rem;
  font-size: 0.800rem;
  font-weight: 600;
  color: #1f2937;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  

  &:hover {
    text-decoration: underline;
  }
`;


