import React from 'react';
import _ from 'lodash';
import '../booking.css';
import moment from 'moment';

export default function Sidebar(props) {

	if (props.showing) {
		const relDate = moment(props.location.state.film.releaseDate, "YYYY-MM-DD");
	}
	
	return (
		<div className="sidebar">
			<img src={props.location.state.film.landImage} width="100%" />
			<h1 className="movietitle">{props.location.state.film.title}</h1>
			<div className="movieinfo">
			<h2>Release Date: {moment(props.location.state.film.releaseDate).format("DD/MM/YYYY")}, Cert: {props.location.state.film.cert}, Runtime: {props.location.state.film.runTime}</h2>
			<h3>Directed by {props.location.state.film.director}</h3>
			<h4>Cast: {props.location.state.film.cast}</h4></div>
			{ props.showing &&
				<div>
					<h3>Showing:</h3>
					<h4>{moment(props.showing.time, "YYYY-MM-DD, h:mm:ss").format('DD/MM/YYYY h:mm')}</h4>
				</div>
			}

			{ props.tickets &&
				<div className="ticketssidebar">
					<h2>Tickets</h2>
					{ _.keys(props.tickets).map(ticketType => {
						return props.tickets[ticketType].tickets > 0 ?
							<div>{ticketType} - {props.tickets[ticketType].tickets} - {props.tickets[ticketType].tickets * props.tickets[ticketType].price}</div>
						:
							<div></div>
					})}
				</div>
			}
		</div>
	);
}