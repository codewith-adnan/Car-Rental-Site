
import styled from 'styled-components'

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
  margin-bottom: 5px;
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

export const Form = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormGroup = styled.div`
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  color: #374151;
  height: 1.50rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  justify-content: center;
  align-items: center;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 97%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgb(132, 132, 133);
  font-size: 0.875rem;
  cursor: pointer;

  @media (max-width: 480px) {
    top: 60%;
    right: 0.5rem;
    transform: translateY(-50%);
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  gap: 0rem;
  margin-top: 0rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0rem;
  color: #374151;
  font-weight: 600;
  cursor: pointer;

  input {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const Link = styled.a`
  color: #2563eb;
  text-decoration: none;
  background-color: white;
  cursor: pointer;
  border: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 107%;
  background: #2563eb;
  color: white;
  height: 2.55rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  margin-top: 0rem;
  margin-bottom: 0rem;

  &:hover {
    background: #1d4ed8;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const DividerText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 12px;
`;

export const SocialButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  width: 60%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  color: #374151;
  background: white;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  i {
    font-size: 0.875rem;
  }
`;

export const SocialIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const ErrorText = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.25rem;
  margin-bottom: 0rem;
`;

