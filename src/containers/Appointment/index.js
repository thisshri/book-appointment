import React, { useMemo } from 'react';

import moment from 'moment';

import {
  useParams,
  Link,
  Redirect,
} from 'react-router-dom';

import './styles.scss';

import {
  Container,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const TIME_SLOT = [9, 10, 11, 12, 13, 14, 15, 16];

const Appointment = () => { 
  let { date, month, year } = useParams();
  const currentDate = `${date}/${month}/${year}`;

  const bookingData = useMemo(
    () => (
      JSON.parse(
        localStorage.getItem('Data')
        ) || {}
    ), []
  );

  if (!(date && month && year)) {
    const currentDate = moment();
    date = currentDate.date();
    month = currentDate.month() + 1;
    year = currentDate.year();
    return (
      <Redirect to={`/${date}/${month}/${year}/`} />
    )
  }
  
  return (
    <Container className="AppointmentWrapper">
      <Row>
        <Col>
          <h1>
            {
             `${currentDate}: ------------ [   <   ]    [   >   ] ` 
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
          { TIME_SLOT.map(
              time => (
                <Link to={`${time}/details/`}>
                  <Button className={bookingData[currentDate] && bookingData[currentDate][time] && "booked"}>
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
