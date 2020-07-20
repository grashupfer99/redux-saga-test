import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default function NewUserForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(' handleSubmit >>>', firstName, lastName)
    props.onSubmit({
      firstName,
      lastName
    })
    setFirstName('');
    setLastName('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input required placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input required placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  )
}
