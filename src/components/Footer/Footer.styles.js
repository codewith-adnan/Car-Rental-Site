import styled from 'styled-components';


export const FooterWrapper = styled.footer `
  font-family: 'poppins';
background-color:rgb(5, 20, 63);
 color: white;
  padding: 2.5rem 1.5rem;
  top: 2rem;

  @media (max-with) {
    
  }
   `;

export const FooterContainer = styled.div `
max-width: 1280px;
 margin: auto;
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
    gap: 5rem;
    `;

export const FooterColumn = styled.div `
 display: flex;
 gap: 0rem;
  flex-direction:row;
  display: inline-block;
  margin-right: 5rem;
  text-align: start;
  
  `;

export const LogoImage = styled.img `
 width: 160px;
  height: auto;
   margin-bottom: 1rem;
   @media (max-width:368px) {
    width: 100px;
  }
   
   `;

export const Description = styled.p `
font-size: 14px; 
line-height: 2;
 max-width: 20rem;
 `;

export const FooterTitle = styled.h3 `
font-size: 16px;
 font-weight: 600; 
 margin-bottom: 1rem;
 `;

export const FooterList = styled.ul `
list-style: none;
 padding: 0;
 margin: 50px;
  margin: 0;
  line-height: 1rem;

  @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
    }

  `;

export const FooterListItem = styled.li `
font-size: 13px;
 line-height: 1.4;
  margin-bottom: 0.5rem;
  line-height: 1.5;

  `;

export const FooterLink = styled.a`
color: white;
text-decoration: none;
line-height: 1.5;


&:hover {
text-decoration: underline;
}
`;

export const FooterDivider = styled.hr `
 border: none;
  border-top: 1px solid #4b5563;
   margin-top: 2.5rem;
   `;

export const Copyright = styled.p `
font-size: 14px;
 text-align: left;
  margin-top: 1rem; 
  max-width: 1280px;
   margin-left: auto;
    margin-right: auto;
    `;