import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../assets/QALogo.png';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component{





  
render(){
    return(
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <a href="http://localhost:3000/">
    <img src={logo} class="logostyle"/></a>
    <Nav className="mr-auto">
      <Link to="/listings"><Nav.Link className="navhov" href="/listings">Current Listings</Nav.Link></Link>
      <Link to="/upcomings"><Nav.Link className="navhov" href="/upcomings">Future Listings</Nav.Link></Link>
      <Link to="/screens"><Nav.Link className="navhov" href="/screens">Screens</Nav.Link></Link>
      <Link to="/discussionsboard"> <Nav.Link className="navhov" href="/discussionsboard">Discussions Board</Nav.Link></Link>
      </Nav>
      <Form inline className="former">
      <FormControl type="text" placeholder="Search Term" className="mr-sm-2" />
      <Button variant="" className="navhov" type="submit">Search</Button>
    </Form>
  </Navbar>)
}
}

export default AppNavbar