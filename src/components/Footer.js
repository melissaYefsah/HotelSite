import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import hotelLogo from '../app/assets/img/logo.png';
//import { BsArrowRight } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col xs={3} sm={3}>
            <div className="logo-container">
              <img src={hotelLogo} alt='hotel logo' className='float-start logo' width='90' height='90' />
              <h2 className='mt-1'>Luxury Hotel</h2>
           </div>
          </Col>
          <Col xs={{ size: 4, offset: 1 }} sm='2' className='footer-links'>
        <h5>Links</h5>
        <ul className='list-unstyled'>
          <li>
            
            <Link to='/'>Home</Link>
          </li>
          <li>
            
            <Link to='/about'>About</Link>
          </li>
          <li>
            
            <Link to='/room'>Room & Suits</Link>
          </li>
          <li>
            
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Col>
          <Col xs={3} sm={3} className='text-center'>
                        <h4>Social</h4>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
            </Col>
          <Col xs={3} sm={3}>
            <h4>Contact Us</h4>
            <p >Email: info@luxuryhotel.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
