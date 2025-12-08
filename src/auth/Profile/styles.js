import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: #f8faff;
  font-family: 'poppins';

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const Section = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const ProfileUploadButton = styled.button`
  background: #4461f2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SaveButton = styled.button`
  background: #22c55e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 75%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 93%;
  }
`;

export const ProfileLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
`;

export const ProfileInput = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  background-color: #f5f7fa;
  font-size: 0.95rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.4rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UploadSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1248px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  gap: 10rem;

  @media (max-width: 1024px) {
    gap: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 16px;
    width: 90%;
  }
`;

export const UploadLabel = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 8px;
  display: block;
`;

export const UploadInput = styled.input`
  background-color: #f5f7fa;
  border: none;
  border-radius: 6px;
  height: 40px;
  width: 100%;
  padding: 0 12px;
  font-size: 13px;
  font-weight: 400;
  color: #000000;

  ::placeholder {
    color: #a1a1a1;
  }

  &:focus {
    outline: none;
  }
  @media screen {
    width: 90%;
  }
`;

export const ImageUploadGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const UploadInfoBox = styled.div`
  background-color: #f5f7fa;
  border-radius: 6px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 9px;
  font-weight: 400;
  color: #7e8ca0;
  padding: 0 8px;
  line-height: 1.3;
`;

export const LicenceUploadButton = styled.button`
  margin-top: 12px;
  background-color: #2563eb;
  color: white;
  font-size: 11px;
  font-weight: 400;
  border: none;
  height: 35px;
  border-radius: 6px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  cursor: pointer;
`;
