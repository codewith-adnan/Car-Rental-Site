import styled from "styled-components";

export const ForgettWrapper = styled.div`
  font-family: 'poppins';
  display: flex;
  width: 100%;
  height: 100vh;
  background: #f9fafb;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ForgettContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ForgettLeft = styled.div`
  flex: 1;
  height: 100%;
`;

export const ForgettImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 420px) {
    display: none;
  }
  
`;

export const ForgettRight = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: -1rem;
  }
`;

export const ForgettBrand = styled.img`
  width: 7rem;
  margin-bottom: 1.5rem;
`;

export const ForgettTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const ForgettText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ForgettForm = styled.form`
  width: 100%;
  max-width: 300px;
`;

export const ForgettLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const ForgettInput = styled.input`
  width: 90%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #374151;
  height: 1.75rem ;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.4);
  }
`;

export const ForgettButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background: #2563eb;
  border: none;
  height: 2.75rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;
export const ErrorText = styled.p`
  color:rgb(253, 107, 97);
  font-size: 0.75rem;
  margin-top: 0rem;
`;