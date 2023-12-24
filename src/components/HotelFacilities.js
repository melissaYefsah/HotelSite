import { Container, Row, Col } from 'reactstrap';

const HotelFacilities = () => {
  const goldIcon = {
    color: '#C19A6B',
  };
  const boxStyle = {
    backgroundColor: '#F7E7CE',
    border: '2px solid #F7E7CE',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    marginLeft:'60px'
  };

  return (
    <Container>
      <Row>
        <h5>HOTEL FACILITIES</h5>
        <h1>Finest And Luxurious Hotel In The Town</h1>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </Row>
      <Row xs={4} sm={4} className="mb-4">
        <Col style={boxStyle}>
          <i className="fas fa-parking fa-3x" style={goldIcon}></i>
          <h3>Parking</h3>
        </Col>
        <Col style={boxStyle}>
          <i className="fas fa-bell fa-3x" style={goldIcon}></i>
          <h3>Alarm</h3>
        </Col>
        <Col style={boxStyle}>
          <i className="fas fa-wifi fa-3x" style={goldIcon}></i>
          <h3>Fast Wifi</h3>
        </Col>
      </Row>
      <Row xs={4} sm={4} className="mb-4">
        <Col style={boxStyle}>
          <i className="fas fa-coffee fa-3x" style={goldIcon}></i>
          <h3>Coffee</h3>
        </Col>
        <Col style={boxStyle}>
          <i className="fas fa-shield-alt fa-3x" style={goldIcon}></i>
          <h3>Safe</h3>
        </Col>
        <Col style={boxStyle}>
          <i className="fas fa-bath fa-3x" style={goldIcon}></i>
          <h3>Bath</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelFacilities;
