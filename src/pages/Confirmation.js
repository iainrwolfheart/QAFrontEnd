import React from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class Confirmation extends React.Component {
	constructor(props) {
		super(props);

		this.handlePay = this.handlePay.bind(this);
	}

	handlePay() {
		const seatIds = _.flatMap(this.props.location.state.seats, (row) =>
			_.map(row.filter(seat => seat.selected === true), seat => seat.location)
		);

		axios.post('http://localhost:8000/bookings', {
			firstName: 'Tom',
			lastName: 'Ramsden',
			showingId: this.props.location.state.showing.id,
			seatIds: seatIds,
			totalPrice: 0.00,
			paid: false,
		});
	}

	render() {
		return (
			<div>
				<h1>Your booking</h1>
				<input type="button" value="Proceed to Payment" onClick={this.handlePay} />
			</div>
		)
	}
}