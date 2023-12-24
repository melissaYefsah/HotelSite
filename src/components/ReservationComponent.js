import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Col md={3}>
            <FormGroup>
              <Label for="checkInDate">Check In</Label>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInChange}
                dateFormat="MM/dd/yyyy"
                id="checkInDate"
                className="form-control"
                placeholderText="MM/DD/YYYY"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="checkOutDate">Check Out</Label>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutChange}
                dateFormat="MM/dd/yyyy"
                id="checkOutDate"
                className="form-control"
                placeholderText="MM/DD/YYYY"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="adults">Adults</Label>
              <Input type="select" id="adults" name="adults" defaultValue={1}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="children">Children</Label>
              <Input type="select" id="children" name="children" defaultValue={1}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="rooms">Rooms</Label>
              <Input type="select" id="rooms" name="rooms" defaultValue={1}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Check Availability</Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
