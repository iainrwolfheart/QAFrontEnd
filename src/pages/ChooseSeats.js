import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import Axios from 'axios';

export default class ChooseSeats extends React.Component {
	constructor(props) {
		super(props);

		this.seatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #000', margin: 10, float: 'left'};
		this.selectedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #000', margin: 10, float: 'left', background: '#000'};
		this.bookedSeatStyle = {width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #b2bec3', margin: 10, float: 'left', background: '#b2bec3'};
	
		const tickets = _.sum(_.map(props.tickets, 'tickets'));
		
		this.state = {
			seats: [],
			tickets: tickets,
			selectedSeatsCount: 0,
		};

		this.toggleSeatSelected = this.toggleSeatSelected.bind(this);
	}

	componentDidMount() {
		Axios.get('http://localhost:8000/screens/5d417b7be7179a064fab4810').then(response => {
			const rows = response.data.seats.map(row => row.map(seat => ({...JSON.parse(seat), selected: false, booked: false})));
			this.setState({
				seats: rows
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
											return <div data-row={row.toUpperCase()} data-seat={seat.location} data-selected={seat.selected} style={seat.selected ? this.selectedSeatStyle : this.seatStyle} onClick={this.toggleSeatSelected}></div>
										})}
									</div>
								</div>
						);
					})}
					{/* { this.rows.map(row => {
						return (
							<div style={{display: 'flex'}}>
								<div style={{display: 'flex', flex: '0.05', justifyContent: 'center', alignItems: 'center'}}>{row}</div>
								<div style={{flex: '1'}}>
								{ this.state.seats.map(seat => {
									return <div data-row={row} data-seat={seat.seat} data-selected={seat.selected} style={{width: 25, height: 25, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, border: '1px solid #000', margin: 10, float: 'left'}} onClick={this.toggleSeatSelected}></div>
								})}
								</div>
							</div>
						)
					})} */}
				</div>
			</div>
		);
	}
}