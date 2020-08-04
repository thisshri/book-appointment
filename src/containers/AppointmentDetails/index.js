import React, { useState } from 'react';

import {
  useParams,
  useHistory,
} from 'react-router-dom';

import './styles.scss';

import {
  Container,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const MOBILE_NUMBER = "mobile";

const AppointmentDetails = () => { 
  let { date, month, year, timeFrom} = useParams();
  const currentDate = `${date}/${month}/${year}`;
  const history = useHistory();

  const Data = JSON.parse(
      localStorage.getItem('Data')
    );

  const [userDetails, setUserDetails] = useState(
    Data && Data[currentDate] && Data[currentDate][timeFrom] || {}
  );

  const updateFormData = (e) => {
    setUserDetails(
      {
        ...userDetails,
        [e.target.dataset.type]: e.target.value,
      }
    )
  } 
   
  const onClickSave = () => { 
    let Data = JSON.parse(
      localStorage.getItem('Data')
    ) || {};

    if (!Data[currentDate]) {
      Data = {
        [currentDate]: {
          [timeFrom]: userDetails,
        }
      } 
    } else {
      Data[currentDate][timeFrom] = userDetails;
    }
      
    localStorage.setItem( 'Data', JSON.stringify(Data));
        
    history.goBack();
  }

  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h1 className="my-5">
            Please Fill Your Details
          </h1>
          <h2 className="my-5">
            Date and time: {timeFrom}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="First Name"
              data-type={FIRST_NAME}
              onChange={updateFormData}
              value={userDetails[FIRST_NAME]}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="Last Name"
              data-type={LAST_NAME}
              onChange={updateFormData}
              value={userDetails[LAST_NAME]}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Mobile Number"
              aria-label="First Name"
              aria-describedby="First Name"
              data-type={MOBILE_NUMBER}
              onChange={updateFormData}
              value={userDetails[MOBILE_NUMBER]}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="buttons">
        <Col>
          <Button
            onClick={() => history.goBack()}
            variant="secondary">
            Cancel
          </Button>
        </Col>
        <Col>
          <Button
            onClick={onClickSave}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  );
 }

export default AppointmentDetails;
