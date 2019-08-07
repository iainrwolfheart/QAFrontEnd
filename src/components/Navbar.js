import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../assets/QALogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


class AppNavbar extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      search: '',
      films: []
    }
  }

  componentDidMount() {
    axios.get(`http://10.154.0.3:8000/films`)
    .then(response => {
        this.setState({
            films: response.data,
            isLoaded: true,
        });
    })
    console.log(this.state.films);
}

  onSubmit = (e) => {
    e.preventDefault();
    const { search, films } = this.state
    this.state.films.map(item => {

    if(search==item.title){
      window.location = `/film/${item.id}`;
    }})}
  
 
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  }

render(){
  const { search } = this.state;
    return(
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <a href="http://localhost:3000/">
    <img src={logo} class="logostyle"/></a>
    <Nav className="mr-auto">
      <Nav.Link className="navhov" href="/listings">Current Listings</Nav.Link>
      <Nav.Link className="navhov" href="/upcomings">Future Listings</Nav.Link>
      <Nav.Link className="navhov" href="/screens">Screens</Nav.Link>
      <Nav.Link className="navhov" href="/discussionsboard">Discussions Board</Nav.Link>
    </Nav>
    <Form inline className="former" onSubmit={this.onSubmit}>
      <FormControl type="text" placeholder="Search Term" className="mr-sm-2" onChange={this.onChange} value={search} name="search"/>
      <Button variant="" className="navhov" type="submit">Search</Button>
    </Form>
  </Navbar>)
}
}

export default AppNavbar