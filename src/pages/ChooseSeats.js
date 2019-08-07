import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../booking.css';

export default class ChooseSeats extends React.Component {
	constructor(props) {
		super(props);

		this.seatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid rgb(175, 0, 0)', margin: 10, float: 'left', display: 'flex', justifyContent: 'center', color: 'rgb(175, 0, 0)'};
		this.selectedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid rgb(207, 0, 0)', margin: 10, float: 'left', background: 'rgb(207, 0, 0)', display: 'flex', justifyContent: 'center'};
		this.bookedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid rgb(105, 105, 105)', margin: 10, float: 'left', background: 'rgb(105, 105, 105)', display: 'flex', justifyContent: 'center', color: 'rgb(105, 105, 105)'};
		this.spaceStyle = {width: 25, height: 25, margin: 10, float: 'left', border: '1px solid rgba(0, 0, 0, 0)'};
		
		const tickets = _.sum(_.map(props.tickets, (ticket, key) => (key === 'family') ? ticket.tickets * 4 : ticket.tickets));

		this.state = {
			seats: [],
			tickets: tickets,
			selectedSeatsCount: 0,
		};

		this.toggleSeatSelected = this.toggleSeatSelected.bind(this);

		console.log('BOOKING ID', props.location.state.bookingID);



		// x.seats.map((row, rowIndex) => row.map((seat, seatIndex) => {
		// 	console.log(x.seats[rowIndex][seatIndex].location.substring(1));
		// 	if (x.seats[rowIndex][seatIndex].location.substring(1) == 7 || x.seats[rowIndex][seatIndex].location.substring(1) == 8) {
		// 		console.log('space');
		// 		x.seats[rowIndex][seatIndex].type = 'space';
		// 	}
		// }));

		// console.log(JSON.stringify(x));
	}

	componentDidMount() {
		axios.get('http://35.246.125.69:8000/screens/' + this.props.location.state.showing.screenId).then(response => {
			axios.get('http://35.246.125.69:8000/bookings/showing/' + this.props.location.state.showing.id).then(bookingsResponse => {
				const bookedSeats = _.flatMap(_.map(bookingsResponse.data, 'seatIds'), seatIds => seatIds);
				const rows = response.data.seats.map(row => row.map(seat => ({...JSON.parse(seat), selected: false, booked: _.includes(bookedSeats, JSON.parse(seat).location)})));
				this.setState({
					seats: rows
				});

			});
		});
	}

	toggleSeatSelected(event) {
		const row = event.target.dataset.row;
		const seat = event.target.dataset.seat;
		const rowIndex = this.alphabetPosition(row.toLowerCase()) - 1;
		const index = this.state.seats[rowIndex].findIndex(object => object.location === seat);

		if ((!this.state.seats[rowIndex][index].selected) && this.state.selectedSeatsCount < this.state.tickets) {
			this.setState((prevState) => update(prevState, {
				seats: {
					[rowIndex]: {
						[index]: {
							$toggle: ['selected']
						}
					}
				},
				selectedSeatsCount: {
					$set: (prevState.selectedSeatsCount + 1)
				}
			}));

			axios.get('http://35.246.125.69:8000/bookings/showing/' + this.props.location.state.showing.id).then(bookingsResponse => {
				const bookedSeats = _.flatMap(_.map(bookingsResponse.data, 'seatIds'), seatIds => seatIds);
				const seatBooked = _.includes(bookedSeats, seat);
				
				if (seatBooked) {
					alert('That seat has already been booked. Please choose another.');

					this.setState((prevState) => update(prevState, {
						seats: {
							[rowIndex]: {
								[index]: {
									$toggle: ['selected'],
									$toggle: ['booked']
								}
							}
						},
						selectedSeatsCount: {
							$set: (prevState.selectedSeatsCount - 1)
						}
					}));
				} else {
					const seatIds = _.flatMap(this.state.seats, (row) =>
						_.map(row.filter(seat => seat.selected === true), seat => seat.location)
					);

					axios.post('http://35.246.125.69:8000/bookings/' + this.props.location.state.bookingID + '/setseats', {
						seatIds: seatIds
					});
				}

			});
		} else if (this.state.seats[rowIndex][index].selected) {
			this.setState((prevState) => update(prevState, {
				seats: {
					[rowIndex]: {
						[index]: {
							$toggle: ['selected']
						}
					}
				},
				selectedSeatsCount: {
					$set: (prevState.selectedSeatsCount - 1)
				}
			}));
		}
	}

	alphabetPosition(text){
		return text.split('').map(function(character){ return character.charCodeAt(0) - 'a'.charCodeAt(0) + 1; });
	}

	render() {
		return (
			<div className="seats">
				<div>
					{ this.state.seats.map((seatRow, index) => {
						const row = String.fromCharCode(97 + index);
						return (
							<div style={{display: 'flex'}}>
								<div style={{display: 'flex', flex: '0.05', justifyContent: 'center', alignItems: 'center'}}>{row.toUpperCase()}</div>
									<div style={{flex: '1'}}>
										{ seatRow.map(seat => {
											if (seat.type == 'seat') {
												if (!seat.booked) {
													return <div key={row.toUpperCase()} data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={seat.selected ? this.selectedSeatStyle : this.seatStyle} onClick={this.toggleSeatSelected} className="seat">{seat.location.substring(1)}</div>
												} else {
													return <div key={row.toUpperCase()} data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={this.bookedSeatStyle}>{seat.location.substring(1)}</div>
												}
											} else if (seat.type == 'space') {
												return <div key={row.toUpperCase()} data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={this.spaceStyle}></div>
											}
										})}
									</div>
								</div>
						);
					})}
					<Link to={{pathname: '/book/confirm/', state: {film: this.props.location.state.film, showing: this.props.location.state.showing, seats: this.state.seats, tickets: this.props.location.state.tickets, bookingID: this.props.location.state.bookingID}}}><button type='button' class='confbutton'>Confirm Booking</button></Link>
				</div>
			</div>
		);
	}
}