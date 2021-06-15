import React from 'react';
import {
  Modal, Button, Col, Row, Form, InputGroup, FormControl, Container,
} from 'react-bootstrap';

const ReviewBody = ({ submission, handleChange }) => {
  // const counter = counterrr;

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Review Body*</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl id="body" value={submission.body} onChange={(event) => handleChange(event)} maxLength={1000} required as="textarea" aria-label="With textarea" placeholder="Why did you like the product or not?" />
    </InputGroup>
  )
}


export default ReviewBody;
