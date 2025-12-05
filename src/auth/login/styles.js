import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: 'poppins';
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

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

export const FormSection = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 450px;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #374151;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  margin-top: -0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  cursor: pointer;

  input {
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
  }
`;

export const Link = styled.button`
  color: #2563eb;
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
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

  &:hover {
    background: #1d4ed8;
  }
`;

export const DividerText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const SocialButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 450px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const SocialIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const ErrorText = styled.p`
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
`;

