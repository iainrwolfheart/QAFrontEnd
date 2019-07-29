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
	}

	updateNumberOfTickets(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<div>
				Tickets
				{ _.keys(this.state).map((ticketType) => 
					<div key={ticketType}>
						<h2>{_.startCase(ticketType)}</h2>
						<input type="text" name={ticketType} value={this.state[ticketType]} onChange={this.updateNumberOfTickets} />
					</div>
				)}
			</div>
		);
	}
}