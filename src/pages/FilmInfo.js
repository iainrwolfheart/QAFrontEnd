import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        const { film } = props.location.state;
        console.log('FILM: ', film);

        this.state = {
            film: film
        }
    }

    componentDidMount() {
        if (this.state.film === null) {
            // DO API CALL
        }
    }

    render () {
        return (        
            <div>
                <img src={this.state.film.landImage}/>
                <h1>{this.state.film.title}</h1>
                <h2>Release Date: {this.state.film.releaseDate}, cert: {this.state.film.cert}, Runtime: {this.state.film.runTime}</h2>
                <h3>Directed by {this.state.film.director}</h3>
                <h4>Cast: {this.state.film.cast}</h4>
                <h5>{this.state.film.description}</h5>
                <Link to={'chooseshowing/' + this.state.film._id}><button type='button'>Book Now</button></Link>
                </div>
        );
    }
}
