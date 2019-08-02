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
			
			let cutOff = moment('2019-08-25');
			let now = moment();
			let movieTimes = ['10:40', '11:00', '12:30', '13:00', '14:45', '15:15', '16:00', '17:05', '17:45', '18:00', '19:30', '20:00'];
			
			// axios.get('http://localhost:8000/screens')
			// .then(screensResponse => {
			// 	response.data.forEach((film, index) => {
			// 		if (index % 2 === 0) {
			// 			let screenID = screensResponse.data[0].id;

			// 			for (var m = moment(now); m.diff(cutOff, 'days') <= 0; m.add(1, 'days')) {
			// 				let date = m.format('YYYY-MM-DD');
							
			// 				movieTimes.forEach(time => {
			// 					let dateTime = new Date(date + ' ' + time);
			// 					dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
			// 					console.log(dateTime);
								
			// 					axios.post('http://localhost:8000/showings', {
			// 						filmId: film.id,
			// 						screenId: screenID,
			// 						time: dateTime
			// 					});
			// 				});
			// 			}
			// 		} else {
			// 			let screenID = screensResponse.data[1].id;
						
			// 			for (var m = moment(now); m.diff(cutOff, 'days') <= 0; m.add(1, 'days')) {
			// 				let date = m.format('YYYY-MM-DD');
							
			// 				movieTimes.forEach(time => {
			// 					let dateTime = new Date(date + ' ' + time);
			// 					dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
			// 					console.log(dateTime);
								
			// 					axios.post('http://localhost:8000/showings', {
			// 						filmId: film.id,
			// 						screenId: screenID,
			// 						time: dateTime,
			// 					});
			// 				});
			// 			}

			// 		}
			// 	});
			// })
        })
		// console.log(this.state.films);
		

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
