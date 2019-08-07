import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment';

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

    render() {
        const cutOff = moment("2019-08-18", "YYYY-MM-DD");
        const relDate = moment(this.state.film.releaseDate, "YYYY-MM-DD");
        const curList = relDate.isBefore(cutOff);

        return (
            <div className="info">
                <img src={this.state.film.landImage} style={{ width: 470, height: 300 }} />
                <h1 className="filmtitle">{this.state.film.title}</h1>
                <h2>Release Date: {relDate.format('DD/MM/YYYY')} , cert: {this.state.film.cert}, Runtime: {this.state.film.runTime}</h2>
                <h3>Directed by {this.state.film.director}</h3>
                <h4>Cast: {this.state.film.cast}</h4>
                <h5>{this.state.film.description}</h5>

                {
                    curList && (<Link to={{
                        pathname: `/book/chooseshowing/${this.state.film.id}`,
                        state: { film: this.state.film }
                    }}>
                        <button type='button' className="booknowbutton">
                            Book Now
                    </button>
                    </Link>)
                }
            </div>);
    }
}