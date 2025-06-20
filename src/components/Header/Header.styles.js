import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  font-family: 'poppins';
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: relative;
  z-index: 1000;
  background-color: white;
  border-bottom: black;

`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 35px;

  @media (max-width:368px) {
    width: 100px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  list-style: none;
  font-weight:300;

  & > div {
    position: relative; 
    padding-bottom: 0.25rem;
    color: ${({ active }) => (active ? '#000' : '#000')};
    font-weight: 400;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    `
    & > div::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 3px;
      background-color: #60a5fa;
      border-radius: 1px;
    }
  `}
`;
export const BurgerIcon = styled.div`
  font-size: 1.6rem;
  cursor: pointer;
  color: #000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 220px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 999;
`;

export const MobileMenuItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
  border-bottom: 1px solid #f1f1f1;

  &:hover {
    background: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;
export const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  font-weight: 500;
  color: #000;
  margin-right: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: 10.50rem;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 999;
`;

export const DropdownCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

