import React, { Component } from 'react';
import '../homepage.css';
import '../pages/certifications.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const certifications = () => {
    return (
        <Container style={{ paddingTop: '120px' }}>
            <Row>
                <Col xs="10" classname="position-relative">
                    <img style={{ width: '120px' }} src="/bbfc-u.png" alt="" /><h1 style={{color: 'white'}}>U Universal – Suitable for all</h1><br></br>
<a>A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.</a><br></br><br></br>
                    <img style={{ width: '120px' }} src="/bbfc-pg.png" alt="" /><h1 style={{color: 'white'}}>PG Parental Guidance</h1><br></br>
<a>General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.</a><br></br><br></br>
                    <img style={{ width: '120px' }} src="/12certificate.png" alt="" /><h1 style={{color: 'white'}}>12A/12 – Suitable for 12 years and over</h1><br></br>
<a>Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</a><br></br><br></br>
                    <img style={{ width: '120px' }} src="/768px-BBFC_15.svg.png" alt="" /><h1 style={{color: 'white'}}>15 – Suitable only for 15 years and over</h1><br></br>
<a>No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</a><br></br><br></br>
                    <img style={{ width: '120px' }} src="/bbfc-18.png" alt="" /><h1 style={{color: 'white'}}>18 – Suitable only for adults</h1><br></br>
<a>No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</a><br></br><br></br>
                </Col>
                <Col xs="2" className="col-2">
                    <a href="http://bbfc.co.uk" target="_blank" class="button" class="d-block p-2 bg-dark text-white">
                        Here at QA Cinema we take Certification seriously. Click here to find out more!
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default certifications;