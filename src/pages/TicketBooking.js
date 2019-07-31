import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChooseShowing from './ChooseShowing';
import ChooseTickets from './ChooseTickets';
import Sidebar from './Sidebar';
import ChooseSeats from './ChooseSeats';

export default class TicketBooking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: null,
			tickets: null,
		};

		this.routes = [
			{
				path: '/book/chooseshowing/:filmId',
				exact: true,
				main: () => ChooseShowing,
				sidebar: (props) => <Sidebar {...props} />
			},
			{
				path: '/book/choosetickets/:filmId/:showingId',
				exact: true,
				main: () => ChooseTickets,
				sidebar: (props) => <Sidebar {...props} showing={this.state.showing} />
			},
			{
				path: '/book/chooseseats/:filmId/:showingId',
				exact: true,
				main: () => ChooseSeats,
				sidebar: (props) => <Sidebar {...props} showing={this.state.showing} tickets={this.state.tickets} />
			}
		];
	}

	updateShowing(showing) {
		this.setState({
			showing: showing,
		});
	}

	updateTickets(tickets) {
		this.setState({
			tickets: tickets,
		});
	}

	render() {
		return (
			<div style={{ display: 'flex', flex: 1 }}>
				<div className="Sidebar" style={{background: '#F2F2F2', flex: 0.3}}>
					{this.routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={route.sidebar}
						/>
					))}
				</div>
				<div className="Content" style={{flex: 1}}>
				{this.routes.map((route, index) => {
						const Component = route.main();
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								render={(props) => <Component {...props} showing={this.state.showing} tickets={this.state.tickets} updateShowing={this.updateShowing.bind(this)} updateTickets={this.updateTickets.bind(this)} />}
							/>
						)
					}
					)}
				</div>
			</div>
		);
	}
}