import styled from 'styled-components';

export const ContactContainer = styled.div`
  font-family: 'poppins';
  background: #f3f6fc;
  height: 100vh;
  width: 96%;
  margin-left:rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100vh;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const InfoBox = styled.div`
  background: #2f5bf3;
  color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 40%;
  position: relative;
  height: 90%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  font-weight: 600;
  font-size: 1%.75rem;
  margin-bottom: 0.75rem;
`;

export const ContactDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 5rem;
  line-height: 1.6;
  max-width: 250px;
    font-size: 1rem;

`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  margin-top: 0rem;
  font-weight: 300;
`;

export const InfoIcon = styled.div`
  background: white;
  color: #2f5bf3;
  border-radius: 9999px;
  padding: 0.5rem;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.span`
  font-size: 1rem;

`;

export const InfoImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 140px;
  height: 140px;
  opacity: 0.3;
  border-radius: 50%;
`;

export const FormBox = styled.form`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  height: 90%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color:  rgb(126, 126, 128);;
  margin-bottom: 0.25rem;
  display: block;
`;

export const InputField = styled.input`
  background: rgb(246, 246, 247);
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  width: 90%;

  &:focus {
    border-color: #2f5bf3;
    outline: none;
    box-shadow: 0 0 0 1px #2f5bf3;
  }
`;

export const TextArea = styled.textarea`
  background: rgb(246, 246, 247);
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  width: 95%;
  resize: none;

  &:focus {
    border-color: #2f5bf3;
    outline: none;
    box-shadow: 0 0 0 1px #2f5bf3;
  }
`;

export const SubmitButton = styled.button`
  background: #2f5bf3;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.625rem 1.5rem;
  border: none;
  margin-right: 1.75rem;
  cursor: pointer;

  &:hover {
    background: #2449c7;
  }
`;
