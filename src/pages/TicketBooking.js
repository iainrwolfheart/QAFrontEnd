import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChooseShowing from './ChooseShowing';
import ChooseTickets from './ChooseTickets';
import Sidebar from './Sidebar';

export default class TicketBooking extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: null,
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
			}
		];
	}

	updateShowing(showing) {
		this.setState({
			showing: showing,
		});
	}

	render() {
		return (
			<div style={{ display: 'flex' }}>
				<div className="Sidebar" style={{background: '#F2F2F2', width: '25%', display: 'flex', height: '100vh'}}>
					{this.routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={route.sidebar}
						/>
					))}
				</div>
				<div className="Content">
				{this.routes.map((route, index) => {
						const Component = route.main();
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								render={(props) => <Component {...props} updateShowing={this.updateShowing.bind(this)} />}
							/>
						)
					}
					)}
				</div>
			</div>
		);
	}
}