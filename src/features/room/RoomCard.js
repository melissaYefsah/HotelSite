import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardSubtitle, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


const RoomCard = ({ room }) => {
  const { id, name, description, image, price, amenities } = room;



  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    color: 'black',
  };

  const linkStyle = {
    textDecoration: 'none',
  };


  const imageStyle = {
    height: '300px', // Set a fixed height for the images
  };



  return (
    <Link to={`${id}`} style={linkStyle}>
      <Card style={cardStyle}>
        <CardImg width='100%' style={imageStyle} src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        <CardBody>
          <CardSubtitle>Price: ${price}</CardSubtitle>
          <CardText>{description}</CardText>
          <CardText>
            <strong>Amenities:</strong> {amenities.join(', ')}
          </CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default RoomCard;
