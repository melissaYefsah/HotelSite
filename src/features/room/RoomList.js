import { Col, Row } from 'reactstrap';
import RoomCard from './RoomCard';
import { selectAllRooms } from './RoomSlice';
import { useSelector } from 'react-redux';
import ReservationForm from './ReservationForm';

const RoomList = () => {
  const rooms = useSelector(selectAllRooms);

  return (
    <Row className="ms-auto">
      {rooms.map((room) => (
        <Col md="4" className="mb-3" key={room.id}>
          <div
            style={{
              backgroundColor: '#FFEB80',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              color: 'black !important',
              textDecoration: 'none',
              marginBottom: '15px', // Add extra margin to the div
            }}
          >
            <RoomCard room={room} />
            <ReservationForm roomId={room.id} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default RoomList;
