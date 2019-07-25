import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../assets/QALogo.png';

class AppNavbar extends React.Component{
render(){
    return(
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <a href="http://localhost:3000/">
    <img src={logo} class="logostyle"/></a>
    <Nav className="mr-auto">
      <Nav.Link className="navhov" href="">Listings</Nav.Link>
      <Nav.Link className="navhov" href="">Bookings</Nav.Link>
      <Nav.Link className="navhov" href="">Screen Info</Nav.Link>
      <Nav.Link className="navhov" href="">Discussions Board</Nav.Link>
    </Nav>
    <Form inline className="former">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="" className="navhov">Search</Button>
    </Form>
  </Navbar>)
}
}

export default AppNavbar