import React from 'react';

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

const AppointmentDetails = () => { 
  let { timeFrom } = useParams();
  const history = useHistory();

  const onClickSave = () => { 
    history.push('/2/8/2020/')
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
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="Last Name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Mobile Number"
              aria-label="First Name"
              aria-describedby="First Name"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="buttons">
        <Col>
          <Button variant="secondary">
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
