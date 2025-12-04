import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'poppins';
  background-color: #e5e7eb;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 0rem;
  overflow-y: auto; /* Enable scrolling */

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

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin-top: 0rem;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  height: auto;
  position: relative;

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
  padding: 2rem 1rem;
  margin-top: -5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh; 
  }
`;


export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 130px;
  height: 45px;
  margin-top: 0rem;
`;

export const Title = styled.h2`
  color: #1f2937;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 0rem;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 400;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  height: 1.50rem;

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
  left: 96%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgb(114, 114, 114);
  font-size: 0.875rem;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 107%;
  background: #2563eb;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  height: 2.75rem;
  padding: 0.5rem 0;
  border-radius: 0.375rem;

  &:hover {
    background: #1d4ed8;
  }

  /* opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; */
`;

export const DividerText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const SocialButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 360px;
  margin-bottom: -5rem;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.50rem;
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

export const Link = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-size: 0.90rem;
  cursor: pointer;
  text-align: center;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
export const PhoneWrapper = styled.div`
  width: 100%;
  z-index: 99999;

  .react-tel-input {
    width: 100%;
    background: none;

    input {
      width: 107%;
      height: 2.70rem;
      font-size: 0.75rem;
      color:rgb(137, 138, 139);
      border: 1px solid #d1d5db;
      border-radius: 0.375rem;
      padding-left: 48px;
      
    }

    .flag-dropdown {
      border: none;
    }
  }
`;

export const ErrorText = styled.p`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.25rem ;
  margin-bottom: 0rem;
`;

