import React from 'react';
import _ from 'lodash';
import '../booking.css'

export default function Sidebar(props) {
	
	return (
		<div className="sidebar">
			<img src={props.location.state.film.landImage} width="100%" />
			<h1 className="movietitle">{props.location.state.film.title}</h1>
			<div className="movieinfo">
			<h2>Release Date: {props.location.state.film.releaseDate}, Cert: {props.location.state.film.cert}, Runtime: {props.location.state.film.runTime}</h2>
			<h3>Directed by {props.location.state.film.director}</h3>
			<h4>Cast: {props.location.state.film.cast}</h4></div>
			{ props.showing &&
				<div>
					<h3>Showing:</h3>
					<h4>{props.showing.time}</h4>
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