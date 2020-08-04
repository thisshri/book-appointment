import React from 'react';

import {
  useParams,
  Link,
} from 'react-router-dom';

import './styles.scss';

import {
  Container,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const Appointment = () => { 
  let { date, month, year } = useParams();
  console.log(date, month, year)

  const timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <Container className="AppointmentWrapper">
      <Row>
        <Col>
          <h1 className="">
            {
             "DATE: ------------------ [   <   ]    [   >   ] " 
            }

          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="my-5">
          <h1>
            Select A Time Slot
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="my-5">
          { timeSlot.map(
              time => (
                <Link to={`${time}/details/`}>
                  <Button>
                    { time } to { ++time }
                  </Button>
                </Link>
              )
            )
          }
        </Col>
      </Row>
    </Container>
  );
 }

export default Appointment;
