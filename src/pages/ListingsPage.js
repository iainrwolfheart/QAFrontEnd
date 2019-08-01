import React from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import FilmInfo from './FilmInfo';
import moment from 'moment';

export default class ListingsPage extends React.Component {
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
    }

    render() {
        return (
            <div>
                { this.state.films.map(item => {
                    const cutOff = moment("2019-08-25", "YYYY-MM-DD");
                    const relDate = moment(item.releaseDate, "YYYY-MM-DD");
                    const futList = relDate.isAfter(cutOff);
                    const curList = relDate.isBefore(cutOff);
                    
                    if (curList) {
                    return (
                        <div key={item.id}>
                            <img src={item.portImage} />
                            <h1>{item.title}</h1>
                            <h2>Directed by {item.director}</h2>
                            <h2>Release Date: {relDate.format('DD/MM/YYYY')}, cert: {item.cert}</h2>
                            <Link to={{
								pathname: `book/chooseshowing/${item.id}`,
								state: {
									film: item,
								}
							}}><button type='button'>Book Now</button></Link>
                            <Link to={{
                                pathname: `film/${item.id}`,
                                state: {
                                    film: item,
                                }
                            }}><button type='button'>More Info</button></Link>
                        </div>
                    )}
                })};
            </div>
        );
    }
}
