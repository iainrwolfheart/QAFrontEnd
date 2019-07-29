import React from 'react';

export default function Sidebar(props) {
	return (
		<div>
			<img src={props.location.state.film.image} width="100%" />
			<h1>{props.location.state.film.title}</h1>
			<h2>Release Date: {props.location.state.film.releaseDate}, cert: {props.location.state.film.cert}, Runtime: {props.location.state.film.runTime}</h2>
			<h3>Directed by {props.location.state.film.director}</h3>
			<h4>Cast: {props.location.state.film.cast}</h4>
			{ props.showing &&
				<div>
					<h3>Showing:</h3>
					<h4>{props.showing.time}</h4>
				</div>
			}
		</div>
	);
}