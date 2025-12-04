import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'poppins';
  background-color: #e5e7eb;
  height: auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: flex-start;
    overflow-y: auto;
    padding: 1rem 0;
  }
`;

export const Container = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: auto;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    width:100%
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px){
    display: none;
  }
`;

export const FormSection = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

export const Logo = styled.img`
  width: 130px;
  height: 40px;
`;

export const Title = styled.h2`
  color: #1f2937;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0rem;
  margin-top: 0rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
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
