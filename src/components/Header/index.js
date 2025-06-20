import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaUser, FaHeart, FaHistory, FaSignOutAlt,
  FaBars, FaTimes, FaHome, FaCarAlt, FaEnvelope
} from "react-icons/fa";

import {
  Navbar,
  LogoContainer,
  Logo,
  NavList,
  NavItem,
  BurgerIcon,
  SignInWrapper,
  Dropdown,
  DropdownCard,
  DropdownItem,
  MobileMenu,
  MobileMenuItem
} from '../../components/Header/Header.styles.js';

import logo from '../../assets/images/logo.png';
import Si from '../../assets/images/Si.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    navigate("/auth/login");
    setShowDropdown(false);
    setBurgerOpen(false);
  };

  const vehiclePaths = [
    '/vehicle-Listing',
    '/vehicle-Details',
    '/Payment',
    '/car-rental-service',
  ];

  const isActive = (path) => {
    if (path === '/vehicle-Listing') {
      return vehiclePaths.some(p => location.pathname.startsWith(p));
    }
    return location.pathname === path;
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowDropdown(false);
    setBurgerOpen(false);
  };

  return (
    <Navbar>
      <LogoContainer>
        <Logo src={logo} alt="CharterCar Logo" />
      </LogoContainer>

      <NavList>
        <NavItem active={isActive('/pages/Home')}>
          <div onClick={() => handleNavigate('/pages/Home')}>Home</div>
        </NavItem>
        <NavItem active={isActive('/vehicle-Listing')}>
          <div onClick={() => handleNavigate('/vehicle-Listing')}>Vehicle Listing</div>
        </NavItem>
        <NavItem active={isActive('/contactUs')}>
          <div onClick={() => handleNavigate('/contactUs')}>Contact Us</div>
        </NavItem>
      </NavList>

      <div style={{ position: 'relative' }}>
        <SignInWrapper onClick={() => setShowDropdown(prev => !prev)}>
          <img
            src={Si}
            alt="Si"
            style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span>Sign In</span>
        </SignInWrapper>

        {showDropdown && (
          <Dropdown>
            <DropdownCard>
              <DropdownItem onClick={() => handleNavigate('/auth/Profile')}>
                <FaUser /> Profile
              </DropdownItem>
              <DropdownItem onClick={() => handleNavigate('/Favourite')}>
                <FaHeart /> Favourites
              </DropdownItem>
              <DropdownItem onClick={() => handleNavigate('/History')}>
                <FaHistory /> History
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </DropdownItem>
            </DropdownCard>
          </Dropdown>
        )}
      </div>

      <BurgerIcon onClick={() => setBurgerOpen(!burgerOpen)}>
        {burgerOpen ? <FaTimes /> : <FaBars />}
      </BurgerIcon>

      {burgerOpen && (
        <MobileMenu>
          <MobileMenuItem
            style={{
              color: isActive('/pages/Home') ? 'blue' : '',
              borderBottom: isActive('/pages/Home') ? '2px solid blue' : ''
            }}
            onClick={() => handleNavigate('/pages/Home')}
          >
            <FaHome /> Home
          </MobileMenuItem>

          <MobileMenuItem
            style={{
              color: isActive('/vehicle-Listing') ? 'blue' : '',
              borderBottom: isActive('/vehicle-Listing') ? '2px solid blue' : ''
            }}
            onClick={() => handleNavigate('/vehicle-Listing')}
          >
            <FaCarAlt /> Vehicle Listing
          </MobileMenuItem>

          <MobileMenuItem
            style={{
              color: isActive('/contactUs') ? 'blue' : '',
              borderBottom: isActive('/contactUs') ? '2px solid blue' : ''
            }}
            onClick={() => handleNavigate('/contactUs')}
          >
            <FaEnvelope /> Contact Us
          </MobileMenuItem>

          <MobileMenuItem onClick={() => handleNavigate('/auth/Profile')}>
            <FaUser /> Profile
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleNavigate('/Favourite')}>
            <FaHeart /> Favourites
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleNavigate('/History')}>
            <FaHistory /> History
          </MobileMenuItem>
          <MobileMenuItem onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </MobileMenuItem>
        </MobileMenu>
      )}
    </Navbar>
  );
};

export default Header;
