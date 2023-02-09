import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
const [value, setValue] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

let name = "Samandar"
let pass = "1992"

const SignData = () => {
    console.log(value)
    console.log(password)
    if(value===name && pass===password){
        // alert("Success")
        navigate("/next")
    }
}

// useEffect(()=>{
//     SignData()
// })

  return (
    <>
   <Container fluid='md'>
<Row className='justify-content-md-center mt-5'>
    <Col xs={6}>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setValue(e.target.value)}/> 
        {name === value ? <p style={{ color: "green" }}>To'g'ri</p> : <p style={{ color: "red" }}>Invalid</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        {pass === password ? <p style={{ color: "green" }}>To'g'ri</p> : <p style={{ color: "red" }}>Invalid</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary"onClick={SignData} >
        Submit
      </Button>
    </Form>
    </Col>
</Row>
   </Container>
    </>
  
  )
}

export default Sign