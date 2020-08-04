import React from 'react';

import {
  useParams,
  Link,
} from 'react-router-dom';

import './styles.scss';

import { Container, Button } from 'react-bootstrap';

const Appointment = () => { 
  let { date, month, year } = useParams();
  console.log(date, month, year)

  const timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <Container className="AppointmentWrapper">
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
    </Container>
  );
 }

export default Appointment;
