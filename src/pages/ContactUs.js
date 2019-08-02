import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../ContactUs.css';
import '../homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import Contact1 from '../assets/Contact1.jpg';
import Contact2 from '../assets/Contact2.jpg';
import Contact3 from '../assets/Contact3.jpg';

const ContactUs = () => {
  return (
      <div className="ContactPadding">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <form action="MAILTO:klaus_dias1@hotmail.co.uk" method="post" enctype="text/plain">
            <h1>Contact Us</h1>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"/>
            <div>
                <br></br>
            <button type="button" className="DirButton1">SUBMIT</button>
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

export default ContactUs;