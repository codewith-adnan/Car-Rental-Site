import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
font-family: 'poppins';
  inset: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  padding: 1rem;
`;

export const PopupContainer = styled.div`
  background: white;
  max-width: 20rem; 
  width: 25%;
  border-radius: 1.5rem; 
  padding: 1.5rem 1.5rem 2rem;
  box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
  text-align: center;
  position: relative;
`;

export const TopBar = styled.div`
  width: 3rem;
  height: 0.375rem;
  background-color: #d1d5db; 
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1rem; 
  color: black;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem; 
  color: #9ca3af;
  margin-bottom: 1.5rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const Star = styled.span`
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#facc15" : "#d1d5db")}; 
`;

export const TextArea = styled.textarea`
  width: 93%;
  border: 1px solid #d1d5db; 
  border-radius: 0.5rem;
  padding: 0.75rem;
  resize: none;
  margin-left: 0rem;
  font-size: 0.875rem; 
  color: #6b7280; 
  outline: none;
  margin-bottom: 0.25rem;
  &::placeholder {
    color: #9ca3af; 
  }
  &:focus {
    border-color: #3b82f6; 
    box-shadow: 0 0 0 2px #93c5fd; 
  }
`;

export const CharCount = styled.div`
  font-size: 0.75rem;
  color:rgb(113, 113, 114); 
  text-align: right;
  margin-bottom: 1.5rem;
`;

export const SendButton = styled.button`
  width: 100%;
  background-color: #2563eb; 
  color: white;
  padding: 0.75rem 0;
  border-radius: 0.5rem; 
  font-size: 0.875rem; 
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1e40af; 
  }
`;
