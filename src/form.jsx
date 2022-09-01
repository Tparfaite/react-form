import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Forms = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[phone,setPhone]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`your first name is ${firstName}\n your last name is ${lastName}\nyour phone is ${phone}\n your password is ${password}`)
    }
    const handleFirstName=(e)=>{
        e.preventDefault();
        setFirstName(e.target.value)
    }
    const handleLastName=(e)=>{
        e.preventDefault();
        setLastName(e.target.value)
    }
    const handlePhone=(e)=>{
        e.preventDefault();
        setPhone(e.target.value)
    }
    const handlePassword=(e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    }

  return (
    < div className='container'>
    <Form onSubmit={handleSubmit}>

        <Form.Group><Form.Label>enter your firstName</Form.Label><Form.Control type="text" value={firstName} onChange={handleFirstName} /></Form.Group>
        <Form.Group><Form.Label>enter your lastName</Form.Label><Form.Control type="text" value={lastName} onChange={handleLastName} /></Form.Group>
        <Form.Group><Form.Label>enter your phone</Form.Label><Form.Control type="text" value={phone} onChange={handlePhone} /></Form.Group>
        <Form.Group><Form.Label>enter your password</Form.Label><Form.Control type="password" value={password} onChange={handlePassword} /></Form.Group><br/>
       <Button variant='primary' type="submit">Submit</Button>
    </Form>

    
    </div>
  )
}

export default Forms
