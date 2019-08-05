import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4" id="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <MDBCol md="3">
            <ul>
                <h5 className="title">
               Opening Times    
              </h5>
              <div className="darker">
              <label>
               Monday - Friday: 10:30 - 23:00
                </label><br/>
                <label>
               Saturdays: 09:30 - 23:00
                </label><br/>
                <label>
               Sundays: 11:00 - 22:00
                </label>
                </div>
            </ul>
            </MDBCol>
            <MDBCol md="3">
            <h5 className="title">About QA Cinemas</h5>
            <a href="/about">About us</a>
            <br></br>
            <a href="/screens">Screens</a>
            <br></br>
            <a href="/GettingHere">Getting Here</a>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Other</h5>
            <a href="/ContactUs">Contact us</a>
            <br></br>
            <a href="/certifications">Certifications</a>
            <br></br>
            <a href="/placestogo">Places To Go</a>
            <br></br>
            <a href="/upcomings">Future Listings</a>
          </MDBCol>
          <MDBCol md="3">
              <h5 className="title">Socials</h5>
              <a href="" class="fa fa-facebook"></a>&nbsp;&nbsp;&nbsp;
              <a href="" class="fa fa-reddit"></a>&nbsp;&nbsp;&nbsp;
<a href="" class="fa fa-twitter"></a>&nbsp;&nbsp;&nbsp;
<a href="" class="fa fa-instagram"></a>

          </MDBCol>
        
            </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.QACinemas.com"> QACinemas.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;