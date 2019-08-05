import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ChooseSeats extends React.Component {
	constructor(props) {
		super(props);

		this.seatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #000', margin: 10, float: 'left', display: 'flex', justifyContent: 'center'};
		this.selectedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #000', margin: 10, float: 'left', background: '#000', display: 'flex', justifyContent: 'center', color: '#FFFFFF'};
		this.bookedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #b2bec3', margin: 10, float: 'left', background: '#b2bec3', display: 'flex', justifyContent: 'center',};
		this.spaceStyle = {width: 25, height: 25, margin: 10, float: 'left', border: '1px solid rgba(0, 0, 0, 0)'};
		
		const tickets = _.sum(_.map(props.tickets, ticket => (ticket.type === 'family') ? 4 : 1));

		this.state = {
			seats: [],
			tickets: tickets,
			selectedSeatsCount: 0,
		};

		this.toggleSeatSelected = this.toggleSeatSelected.bind(this);



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
		axios.get('http://localhost:8000/screens/' + this.props.location.state.showing.screenId).then(response => {
			axios.get('http://localhost:8000/bookings/showing/' + this.props.location.state.showing.id).then(bookingsResponse => {
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
			console.log('SELECTED:', this.state.seats[rowIndex][index].selected, 'SC:', this.state.selectedSeatsCount, 'T:', this.state.tickets);
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
													return <div data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={seat.selected ? this.selectedSeatStyle : this.seatStyle} onClick={this.toggleSeatSelected}>{seat.location.substring(1)}</div>
												} else {
													return <div data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={this.bookedSeatStyle}>{seat.location.substring(1)}</div>
												}
											} else if (seat.type == 'space') {
												return <div data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={this.spaceStyle}></div>
											}
										})}
									</div>
								</div>
						);
					})}
					<Link to={{pathname: '/book/confirm/', state: {film: this.props.location.state.film, showing: this.props.location.state.showing, seats: this.state.seats, tickets: this.props.location.state.tickets}}}><button type='button'>Confirm Booking</button></Link>
				</div>
			</div>
		);
	}
}