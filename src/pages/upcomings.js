import React from 'react';
import './listings.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import FilmInfo from './FilmInfo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ListingsPage1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoaded: false
        }
    }

    componentDidMount() {
                 axios.get(`http://localhost:8000/films`)
                 .then(response => {
                     this.setState({
                         films: response.data,
                         isLoaded: true,
                        
                     });
                     console.log(this.state.films);
                 })
          }

    render() {
        return (
            <div>
                <h1 className = "center" >Future Listings</h1>
                {this.state.films.map((item) => {
                    const cutOff = moment("2019-08-18", "YYYY-MM-DD");
                    const relDate = moment(item.releaseDate, "YYYY-MM-DD");
                    const futList = relDate.isAfter(cutOff);
                    const curList = relDate.isBefore(cutOff);

                    if (futList) {
                    return (
                        
                        <Container key={item.id}>
                            <Row>
                                <Col xs="4" name="imageCol"><br></br>
                                    <img src={item.portImage}/>
                                    
                                </Col>
                                <Col xs="8" name="contentCol">
                                    <p>
                                    <br></br>
                                    <h1>{item.title}</h1>
                                    <h3>Directed by: {item.director}</h3>
                                    <h3>Release Date: {relDate.format('DD/MM/YYYY')}, cert: {item.cert}</h3>
                                    <Link to={'chooseshowing/' + item.id}><button className = "booknow" type='button'>Book Now</button></Link>
                                    <Link to={{
                                        pathname: `film/${item.id}`,
                                        state: {
                                            film: item,
                                        }
                                    }}>&nbsp;&nbsp;<button className = "moreinfo" type='button'>More Info</button></Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    );
                }})}
            </div>
        )
    }}