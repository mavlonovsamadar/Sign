import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarB = () => {
  return (
    <>
<Container>
    <Row>
        <Col xs={12}>
        <Navbar bg="light" variant="primary">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/home" style={{ color: 'black', textDecoration: "none", paddingLeft: '50px' }}> <li li>Home</li></Link>
           <Link to="/login" style={{ color: 'black', textDecoration: "none", paddingLeft: '50px' }}><li li>Login</li></Link>    
        
           <Link to="/reg" style={{ color: 'black', textDecoration: "none", paddingLeft: '50px' }}> <li li>Registration</li></Link>
          </Nav>
        </Container>
      </Navbar>
        </Col>
    </Row>
</Container>
    </>
  )
}

export default NavbarB