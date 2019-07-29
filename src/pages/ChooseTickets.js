import React from 'react';
import _ from 'lodash';

export default class ChooseTickets extends React.Component {
	constructor() {
		super();

		this.state = {
			adult: 0,
			child: 0,
			family: 0,
			senior: 0,
			student: 0,
		}

		this.updateNumberOfTickets = this.updateNumberOfTickets.bind(this);
		this.incrementNumberOfTickets = this.incrementNumberOfTickets.bind(this);
		this.decrementNumberOfTickets = this.decrementNumberOfTickets.bind(this);
	}

	updateNumberOfTickets(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	incrementNumberOfTickets(event) {
		this.setState({
			[event.target.name]: this.state[event.target.name] + 1
		});
	}

	decrementNumberOfTickets(event) {
		this.setState({
			[event.target.name]: this.state[event.target.name] !== 0 ? this.state[event.target.name] - 1 : 0
		});
	}

	render() {
		return (
			<div>
				Tickets
				{ _.keys(this.state).map((ticketType) => 
					<div key={ticketType}>
						<h2>{_.startCase(ticketType)}</h2>
						<input type="button" name={ticketType} value="-" onClick={this.decrementNumberOfTickets} />
						<input type="text" name={ticketType} value={this.state[ticketType]} onChange={this.updateNumberOfTickets} />
						<input type="button" name={ticketType} value="+" onClick={this.incrementNumberOfTickets} />
					</div>
				)}
			</div>
		);
	}
}