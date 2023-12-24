import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import HomeImage from '../app/assets/img/home.jpg';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  // Background image animation
  const imageAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(100%)' },
    config: { duration: 1500 },
  });

  // Text animation
  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(100%)' },
    config: { duration: 1500 },
  });

  // Function to split text into letters
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <animated.span key={index} style={{ display: 'inline-block', ...textAnimation }}>
        {char === ' ' ? '\u00A0' : char}
      </animated.span>
    ));
  };

  const subHeaderStyle = {
    position: 'relative',
    overflow: 'hidden',
    minHeight: '580px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 2,  // Ensure the text is on top of the image
  };

  const buttonStyle = {
    backgroundColor: 'gold',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease-in-out',
  };

  const paragraphStyle = {
    color: 'gold',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
  };

  const hrStyle = {
    border: '1px solid black',
    width: '20px',
    margin: '20px 0',
  };

  return (
    <Container fluid style={subHeaderStyle} className="p-0">
      {/* Animated background image */}
      <animated.img
        src={HomeImage}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          ...imageAnimation,
        }}
      />

      {/* Animated text container */}
      <animated.div style={containerStyle}>
        <Col>
          <Row>
            <h1 className="mb-3">{splitText('This is Luxury Hotel')}</h1>
          </Row>
          <Row>
            <h5 className="mb-4" style={paragraphStyle}>
              {splitText('SUPERIOR HOTEL IN WORLD')}
            </h5>
            <hr style={hrStyle} />
          </Row>
          <Row>
            <p className="mb-4">
              {splitText(
                'Welcome to our luxury hotel, where luxury meets comfort in every detail. Our intimate and stylish accommodations provide a serene retreat, while our attentive staff ensures a personalized experience. From tastefully designed rooms to a range of modern amenities.'
              )}
            </p>
          </Row>
          <Link to="/room">
            <Button style={{ ...buttonStyle }}>Room & Suits</Button>
          </Link>
        </Col>
      </animated.div>
    </Container>
  );
};

export default SubHeader;
