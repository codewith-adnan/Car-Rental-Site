// Models/styles.js
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const Popup = styled.div`
  width: 320px;
  background: white;
  border-radius: 30px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 50px;
  margin-bottom: 24px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #444;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const Message = styled.p`
  font-size: 13px;
  color: #888;
  line-height: 1.4;
  margin-bottom: 24px;
  padding: 0 16px;
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const YesButton = styled.button`
  flex: 1;
  background: #3b6ce1;
  color: white;
  font-size: 17px;
  font-weight: 600;
  padding: 12px 0;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #2c5ad3;
  }
`;

export const NoButton = styled.button`
  flex: 1;
  background: #f9f9f9;
  color: #b0b0b0;
  font-size: 17px;
  font-weight: 600;
  padding: 12px 0;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #ececec;
  }
`;
