import styled from 'styled-components';


export const PopupContainer = styled.div`
  position: absolute;
  bottom: 0rem; 
  left: 50%;
  transform: translateX(-50%);
  font-family: 'poppins';
  z-index: 99999;
  margin: auto;
  padding: auto;
  margin-bottom: 1rem;
  
`;



export const Card = styled.div`
  width: 100%;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  background-color: #E8EEFF;
  border-top-left-radius: 1.5;
  border-top-right-radius: 1.5;
  border-bottom-left-radius: 12rem;
  border-bottom-right-radius: 12rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0rem;
`;

export const CheckImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Content = styled.div`
  padding: 1.5rem 2rem;
  text-align: center;
`;

export const Heading = styled.h2`
  color: #1f2937;
  font-family: 'poppins';
  font-size: 1.50rem;
  font-weight: 600;
  margin-top: 0rem;
  margin-bottom: 0rem;
  line-height: 1.4;
`;

export const Subtext = styled.p`
    color:rgb(153, 154, 155);
  font-size: 0.60rem;
  line-height: 1.5;
  margin-top: 1rem;  
    font-weight: 500; 

  
`;

export const ContinueButton = styled.button`
  margin-top: 0rem;
  width: 100%;
  background-color: #3B66F6;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.75rem 0;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #274dce;
  }
`;
