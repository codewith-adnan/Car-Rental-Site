import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Flogo from "../../assets/images/Flogo.png";

import {
FooterWrapper,
FooterContainer,
FooterColumn,
LogoImage,
Description,
FooterTitle,
FooterList,
FooterListItem,
FooterLink,
FooterDivider,
Copyright,
} from "../../components/Footer/Footer.styles.js"; 

const Footer = () => {

  const location = useLocation();
    const navigate = useNavigate();
  
    const isActive = (path) => location.pathname === path;
  
    const handleNavigate = (path) => () => {
      navigate(path);
    };
  
return (
  <FooterWrapper>
<FooterContainer>
<FooterColumn style={{ flex: "1 1 40%" }}>
<LogoImage src={Flogo} alt="CharterCar Logo" />
<Description>
Lorem ipsum dolor sit amet consectetur. Sit mi dolor nullam
faucibus molestie. Quis mauris at eget risus mattis ornare. Nec
lorem in et sapien tristique neque vivamus. Egestas tempus
facilisis in habitant vitae.
</Description>
</FooterColumn>


    <FooterColumn
      style={{
        flex: "1 1 40%",
        display: "flex",
        flexWrap: "wrap",
        gap: "5rem",
      }}
    >
      <div>
        <FooterTitle>About</FooterTitle>
        <FooterList>
          <FooterListItem>How it works</FooterListItem>
          <FooterListItem>Terms and Conditions</FooterListItem>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>About Us</FooterListItem>
        </FooterList>
      </div>

      <div>
        <FooterTitle>Important Links</FooterTitle>
        <FooterList>
          <FooterListItem>
            <FooterLink active={isActive('/vehicle-Listing')}>
                      <div onClick={handleNavigate('/vehicle-Listing')} style={{ cursor: 'pointer' }}>
                        Vehicle Listing
                      </div>
                    </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink active={isActive('/contactUs')}>
                      <div onClick={handleNavigate('/contactUs')} style={{ cursor: 'pointer' }}>
                        Contact Us
                      </div>
                    </FooterLink>
          </FooterListItem>
        </FooterList>
      </div>

      <div>
        <FooterTitle>Socials</FooterTitle> 
        <FooterList>
          <FooterListItem>
            <FooterLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </FooterLink>
          </FooterListItem>
        </FooterList>
      </div>
    </FooterColumn>
  </FooterContainer>


  <FooterDivider />
  <Copyright>©2023 CharterCar. All rights reserved</Copyright>
</FooterWrapper>

);
};

export default Footer;