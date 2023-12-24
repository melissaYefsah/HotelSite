// Header.js
import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem,Button } from 'reactstrap';
import hotelLogo from '../app/assets/img/logo.png';
import '../../src/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='black' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
        <div className="logo-container">
            <img src={hotelLogo} alt='hotel logo' className='float-start logo' width='90' height='90' />
            <h2 className='mt-1'>Luxury Hotel</h2>
        </div>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem className="ms-4">
            <a className='nav-link' href='/'>
              <i /> Home
            </a>
          </NavItem>
          <NavItem className="ms-4">
            <a className='nav-link' href='/about'>
              <i/> About
            </a>
          </NavItem>
          <NavItem className="ms-4">
            <a className='nav-link' href='/room'>
              <i/> Room & Suites
            </a>
          </NavItem>
          <NavItem className="ms-4">
            <a className='nav-link' href='/contact'>
              <i /> Contact
            </a>
          </NavItem>
          <Button className="ms-4" style={{ backgroundColor: 'gold', color: 'black' }}>Book now</Button>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
