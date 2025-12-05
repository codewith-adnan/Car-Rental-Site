import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'poppins';
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #2563eb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8;
  }
`;

export const Container = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    overflow: visible;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

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
  position: absolute;
  top: 0;
  left: 0;
  
  @media (max-width: 768px){
    display: none;
  }
`;

export const FormSection = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const OTPForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
  max-width: 450px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
  text-align: left;
`;

export const OTPInput = styled.input`
  width: 3rem;
  height: 3rem;
  text-align: center;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  color: #374151;
  font-size: 1.25rem;
  outline: none;
  transition: all 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

export const Timer = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 1rem 0;
  text-align: center;
`;

export const ContinueButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 0.2s;
  box-sizing: border-box;

  &:hover {
    background: #1d4ed8;
  }
`;

export const ResendButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    text-decoration: none;
  }
`;

export const ErrorText = styled.p`
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
`;
