import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import SmartPaymentButtons, { PayPalSDKWrapper } from 'react-smart-payment-buttons';
import '../booking.css';


export default class ConfirmBooking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bookingID: null,
			paymentSuccessful: false,
			paymentCancelled: false,
		}

		this.saveToDatabase = this.saveToDatabase.bind(this);
		this.handleSuccessfulPayment = this.handleSuccessfulPayment.bind(this);
		this.handleCancelledPayment = this.handleCancelledPayment.bind(this);
	}

	saveToDatabase() {
		const totalPrice = _.sum(_.map(this.props.location.state.tickets, (ticketType) => (ticketType.tickets * ticketType.price)));

		const seatIds = _.flatMap(this.props.location.state.seats, (row) =>
			_.map(row.filter(seat => seat.selected === true), seat => seat.location)
		);

		axios.post('http://localhost:8000/bookings', {
			firstName: '',
			lastName: '',
			showingId: this.props.location.state.showing.id,
			seatIds: seatIds,
			totalPrice: totalPrice,
			paid: false,
			cancelled: false,
		}).then(response => {
			const id = response.data.id;

			this.setState({
				bookingID: id,
			});
		});
	}

	handleCreateBooking(data, actions) {
		const totalPrice = _.sum(_.map(this.props.location.state.tickets, (ticketType) => (ticketType.tickets * ticketType.price)));

		return actions.order.create({
			purchase_units: [{
				amount: {
					value: totalPrice,
				}
			}]
		});
	}

	handleSuccessfulPayment({data, actions}) {
		actions.order.capture().then(function (details) {
			axios.post('http://localhost:8000/bookings/' + this.props.location.state.bookingID + '/confirm', {
				firstName: details.payer.name.given_name,
				lastName: details.payer.name.surname,
				email: details.payer.email,
				paid: true,
				cancelled: false,
			});

			this.setState({
				paymentSuccessful: true,
			});
		});
	}

	handleCancelledPayment(data, actions) {
		axios.post('http://localhost:8000/bookings/' + this.props.location.state.bookingID + '/confirm', {
			firstName: '',
			lastName: '',
			email: '',
			paid: false,
			cancelled: true,
		});

		this.setState({
			paymentCancelled: true,
		});
	}

	render() {
		const {film, seats, showing, tickets} = this.props.location.state;
		const seatIds = _.flatMap(seats, (row) =>
			_.map(row.filter(seat => seat.selected === true), seat => seat.location)
		);

		if (this.state.paymentSuccessful) {
			return (
				<div className="confbookinfo"><h1>Your booking is confirmed!</h1>
				<style dangerouslySetInnerHTML={{__html: `
					.Sidebar { display: none }
				`}} />
				<h1>Your booking</h1>
				<img src={film.portImage} />
				<h2 className="conftitle">{film.title}</h2>
				<h3>{film.cast}</h3>
				<h4>{film.description}</h4>
				<h4>{film.runtime}</h4>
				<h4>Cert: {film.cert}</h4>
				<h4>Showing: {showing.time}</h4>
				{ _.keys(tickets).map(ticketType => {
					return tickets[ticketType].tickets > 0 ?
						<div>{ticketType} - {tickets[ticketType].tickets} - £{tickets[ticketType].tickets * tickets[ticketType].price}</div>
					:
						<div></div>
				})}
				</div>
			)
		}

		if (this.state.paymentCancelled) {
			return (
				<div className="confbookinfo"><h1>Your booking has been cancelled</h1><style dangerouslySetInnerHTML={{__html: `
				.Sidebar { display: none }
			`}} />
			<img src={film.portImage} />
			<h2 className="conftitle">{film.title}</h2>
			<h3>{film.cast}</h3>
			<h4>{film.description}</h4>
			<h4>{film.runtime}</h4>
			<h4>Cert: {film.cert}</h4>
			<h4>Showing: {showing.time}</h4></div>
			)
		}

		return (
			<div className="confinfo">
				<style dangerouslySetInnerHTML={{__html: `
					.Sidebar { display: none }
				`}} />
				<h1>Your Booking</h1>
				<img src={film.portImage} />
				<h2 className="conftitle">{film.title}</h2>
				<h3>{film.cast}</h3>
				<h4>{film.description}</h4>
				<h4>{film.runtime}</h4>
				<h4>Cert: {film.cert}</h4>
				<h4>Showing: {showing.time}</h4>
				<h4>Tickets:</h4>
				{ _.keys(tickets).map(ticketType => {
					return tickets[ticketType].tickets > 0 ?
						<div>{ticketType} - {tickets[ticketType].tickets} - £{tickets[ticketType].tickets * tickets[ticketType].price}</div>
					:
						<div></div>
				})}
				<h4>Seats: {seatIds.map((seatID, index) => (index > 0) ? ', ' + seatID : '' + seatID )}</h4>
				<PayPalSDKWrapper currency="GBP" clientId="AQtbSu0EwyTrNloFld2CCjnI-pIg3EQ7nAycqL3d0cXYKr7y7MPnPl10nlkAbn_Vc3jiq20o5bRuKefS">
					<SmartPaymentButtons
						createOrder={(data, actions) => this.handleCreateBooking(data, actions)}
						onApprove={this.handleSuccessfulPayment}
						onCancel={this.handleCancelledPayment}
					/>
				</PayPalSDKWrapper>
			</div>
		)
	}
}