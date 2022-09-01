import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Form2 = () => {
const[addres,setAddres]=useState({
fullName:"",
email:"",
phone:"",
password:""
})
const handleAddres=(e)=>{
    e.preventDefault();
    setAddres({...addres,[e.target.name]:e.target.value})
}
const handleSubmit=(e=>{
    e.preventDefault();
    console.log(addres);
})
  return (
   <>
   <div className='form2'>
    <h2>Sign up</h2>
 <Form onSubmit={handleSubmit}>
    <Form.Group><Form.Label htmlFor="">full name</Form.Label><Form.Control type="text" onChange={handleAddres} name="fullName" id="" /></Form.Group>
    <Form.Group><Form.Label htmlFor="">email</Form.Label><Form.Control type="text" onChange={handleAddres} name="email" id="" /></Form.Group>
    <Form.Group><Form.Label htmlFor="">phone</Form.Label><Form.Control type="text" onChange={handleAddres} name="phone" id="" /></Form.Group>
    <Form.Group><Form.Label htmlFor="">password</Form.Label><Form.Control type="password" onChange={handleAddres} name="password" id="" /></Form.Group><br/>
    <Button variant='success' type='submit'>Sign Up</Button>
 </Form>
 </div>
   
   </>
  )
}

export default Form2
