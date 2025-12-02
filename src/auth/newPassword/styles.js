import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'poppins';
`;

export const Wrapper = styled.main`
  background: white;
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  overflow: hidden;
  border-radius: 0.375rem;
`;

export const LeftSection = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayLogo = styled.img`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 11rem;
`;

export const RightSection = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding: 4rem;
  }
  @media (min-width: 420px){
    margin-top: 1rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-bottom: 1rem;
  margin-top: 0rem;
  width: 7.5rem;
`;

export const Title = styled.h1`
  color: #1f2937;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 80%;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  height: 1.75rem;
  font-size: 0.75rem;
  color: #6b7280;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb50;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 3rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: rgb(125, 126, 128);
  background: none;
  border: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 90%;
  background-color: #2563eb;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  height: 3rem;
  cursor: pointer;
  padding: 0.75rem 0;
  border-radius: 0.375rem;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ErrorText = styled.p`
  color:rgb(253, 107, 97);
  font-size: 0.75rem;
  margin-top: 0.35rem;
  margin-bottom: 0rem;
`;
