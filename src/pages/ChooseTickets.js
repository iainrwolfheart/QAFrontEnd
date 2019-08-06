import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import '../booking.css';

export default class ChooseTickets extends React.Component {
	constructor() {
		super();

		this.state = {
			adult: {tickets: 0, price: 9.50},
			child: {tickets: 0, price: 3.50},
			family: {tickets: 0, price: 15.00},
			senior: {tickets: 0, price: 4.00},
			student: {tickets: 0, price: 5.00},
		}

		this.updateNumberOfTickets = this.updateNumberOfTickets.bind(this);
		this.incrementNumberOfTickets = this.incrementNumberOfTickets.bind(this);
		this.decrementNumberOfTickets = this.decrementNumberOfTickets.bind(this);
	}

	updateNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: event.target.value} });
	}

	incrementNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: this.state[event.target.name].tickets + 1} });
	}

	decrementNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: this.state[event.target.name].tickets !== 0 ? this.state[event.target.name].tickets - 1 : 0} });
	}

	render() {
		return (
			<div className="choosetickets">
				{ _.keys(this.state).map((ticketType) =>
					<div key={ticketType} className="tickettype">
						<h2>{_.startCase(ticketType)}</h2>
						<h3>£{this.state[ticketType].price}</h3>
						<input type="button" name={ticketType} value="-" onClick={this.decrementNumberOfTickets} className="minus"/>
						<input type="text" name={ticketType} value={this.state[ticketType].tickets} onChange={this.updateNumberOfTickets} className="ticketamount"/>
						<input type="button" name={ticketType} value="+" onClick={this.incrementNumberOfTickets} className="plus"/>
						{this.state[ticketType].tickets > 0 &&
							<div className="price">Price: £{this.state[ticketType].tickets * this.state[ticketType].price}</div>
						}
					</div>
				)}
				<Link to={{pathname: '/book/chooseseats/' + this.props.match.params.filmId + '/' + this.props.match.params.showingId, state: {film: this.props.location.state.film, showing: this.props.location.state.showing}}} onClick={() => this.props.updateTickets(this.state)}><button type='button' className="bookbutton">Book Now</button></Link>
			</div>
		);
	}
}