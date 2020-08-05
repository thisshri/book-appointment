import React, { useMemo, useCallback } from 'react';

import moment from 'moment';

import {
  useParams,
  useHistory,
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
  const history = useHistory();
  const currentDate = `${date}/${month}/${year}`;

  const bookingData = useMemo(
    () => (
      JSON.parse(
        localStorage.getItem('Data')
        ) || {}
    ), []
  );

   const gotoDate = useCallback(
    (day) => (
      moment(`${date}/${month}/${year}`, "D/M/YYYY").add(day, "days").format('D-M-YYYY').split('-')
    ), [date, month, year]
  );

  const changeDate = useCallback(
    (newDate) => ( 
      history.push(
        `/${parseInt(newDate[0])}/${parseInt(newDate[1])}/${parseInt(newDate[2])}/`
      )
    ), []
  )

  const formatTime = useCallback(
    (time) => {
      if (time < 12) {
        return `${time} AM`
      }

      if (time > 12) {
        time = time - 12;
      }
    
      return `${time} PM`
    }, []
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
    <div className="AppointmentWrapper">
      <div className="navWrapper">
        <Container className="nav">
          <div onClick={() => changeDate(gotoDate(-1))} className="button">⬅️</div>
          <h2>{currentDate}</h2>
          <div onClick={() => changeDate(gotoDate(1))} className="button">➡️</div>
        </Container>
      </div>
    <Container>
      <Row>
        <Col className="mx-3">
          <h2 className="mt-5">
            Select A Time Slot
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          { TIME_SLOT.map(
              time => (
                <Link to={`${time}/details/`}>
                  <Button className={bookingData[currentDate] && bookingData[currentDate][time] && "booked"}>
                    { formatTime(time) } to { formatTime(++time) }
                  </Button>
                </Link>
              )
            )
          }
        </Col>
      </Row>
    </Container>
    </div>
  );
 }

export default Appointment;
