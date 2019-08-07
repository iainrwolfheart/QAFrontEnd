import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';
import '../ContactUs.css';
import '../homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import Contact1 from '../assets/Contact1.jpg';
import Contact2 from '../assets/Contact2.jpg';
import Contact3 from '../assets/Contact3.jpg';

export default class ContactUs extends React.Component {
  constructor() {
    super();
  this.state = {
    name: "",
    email: "",
    subject: "",
    yourMessage: "",
    text: "Submit"
  };
}

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, yourMessage } = this.state;
    axios.post('http://35.246.125.69/contactus', { name, email, subject, yourMessage })
      .then((result) => {
        console.log(result);
      });
  }

  changeText = (text) => {
    this.setState({ text });
  }
   
  render() {
    const {name, email, subject, yourMessage, text} = this.state;
    return (
        <div className="ContactPadding">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
      <form onSubmit={this.onSubmit}>
      <h1>Contact Us</h1>
      <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
        <input
          name="name"
          placeholder="Your Full Name"
          className="form-control"
          value={this.state.name}
          onChange={this.onChange}
          required
        />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your Email
            </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form-control"
          value={this.state.email}
          onChange={this.onChange}
          required
        />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Subject
            </label>
        <input
          name="subject"
          placeholder="Query Subject"
          className="form-control"
          value={this.state.subject}
          onChange={this.onChange}
          required
        />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your Message
            </label>
        <input
          name="yourMessage"
          placeholder="Message"
          className="form-control"
          value={this.state.yourMessage}
          onChange={this.onChange}
          required
        />
        <div>
        <br />
        <button class="DirButton1" onClick={ () => { this.changeText("Sent")}  }> {text} </button>
        </div>
      </form>
      </MDBCol>
      <div className="Cimage">
                <Carousel style={{height: '430px', width:'700px'}} className="caro1">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Contact1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Contact2}
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Contact3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
      </MDBRow>
    </MDBContainer>
    </div>
  );
    }
}