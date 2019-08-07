import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../booking.css';

export default class ChooseTickets extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			adult: { tickets: 0, price: 9.50 },
			child: { tickets: 0, price: 3.50 },
			family: { tickets: 0, price: 15.00 },
			senior: { tickets: 0, price: 4.00 },
			student: { tickets: 0, price: 5.00 },
		}

		this.updateNumberOfTickets = this.updateNumberOfTickets.bind(this);
		this.incrementNumberOfTickets = this.incrementNumberOfTickets.bind(this);
		this.decrementNumberOfTickets = this.decrementNumberOfTickets.bind(this);
		this.handleProgressBooking = this.handleProgressBooking.bind(this);
	}

	updateNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: event.target.value } });
	}

	incrementNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: this.state[event.target.name].tickets + 1 } });
	}

	decrementNumberOfTickets(event) {
		this.setState({ [event.target.name]: { ...this.state[event.target.name], tickets: this.state[event.target.name].tickets !== 0 ? this.state[event.target.name].tickets - 1 : 0 } });
	}

	handleProgressBooking() {
		const { history } = this.props;

		const totalPrice = _.sum(_.map(this.state, (ticketType) => (ticketType.tickets * ticketType.price)));

		axios.post('http://35.246.125.69:8000/bookings', {
			firstName: '',
			lastName: '',
			showingId: this.props.location.state.showing.id,
			seatIds: [],
			totalPrice: totalPrice,
			paid: false,
			cancelled: false,
		}).then(response => {
			this.props.updateTickets(this.state);
			console.log(response.data);
			
			const id = response.data.id;

			const location = {
				pathname: '/book/chooseseats/' + this.props.match.params.filmId + '/' + this.props.match.params.showingId,
				state: { film: this.props.location.state.film, showing: this.props.location.state.showing, tickets: this.state, bookingID: id }
			}
	
			return history.push(location);
		});
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
				<button type='button' className="bookbutton" onClick={this.handleProgressBooking}>Book Now</button>
			</div>
		);
	}
}