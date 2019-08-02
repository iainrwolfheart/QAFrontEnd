import React from 'react';
import '../homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';


export default class Home extends React.Component {

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
    })
    console.log(this.state.films);
}

    render() {
        return (

            <div>
                <h1 className="headercurrent">Current Listings</h1>  
            <Carousel style={{height: '470px', width:'800px'}} className="carouselcurrent">
        { this.state.films.map(item => {

const cutOff = moment("2019-08-18", "YYYY-MM-DD");
const relDate = moment(item.releaseDate, "YYYY-MM-DD");
const futList = relDate.isAfter(cutOff);
const curList = relDate.isBefore(cutOff);
if (curList) {
        return (
           
                 
                    <Carousel.Item className="cara">
                    <Link to={{
                                pathname: `film/${item._id}`,
                                state: {
                                    film: item,
                                }
                            }}>
                        <img
                            className="d-block w-100"
                            src={item.landImage}
                            
                        /></Link>
                    </Carousel.Item>
         
        ); }
                        })}
    </Carousel>
    <h1 className="headerfuture">Future Listings</h1>  
    <Carousel style={{height: '470px', width:'800px'}} className="carouselcurrent">
        { this.state.films.map(item => {

const cutOff = moment("2019-08-18", "YYYY-MM-DD");
const relDate = moment(item.releaseDate, "YYYY-MM-DD");
const futList = relDate.isAfter(cutOff);
const curList = relDate.isBefore(cutOff);
if (futList) {
        return (
           
                 
                    <Carousel.Item className="cara">
                    <Link to={{
                                pathname: `film/${item._id}`,
                                state: {
                                    film: item,
                                }
                            }}>
                        <img
                            className="d-block w-100"
                            src={item.landImage}
                            
                        /></Link>
                    </Carousel.Item>
         
        ); }
                        })}
    </Carousel>     </div>
    
       )
       
                    }
                }



