import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import '../booking.css';

export default class ChooseShowingDaySection extends React.Component {
	render() {
		return (
			<div className="dateandtime">
				<h3>{Moment(this.props.date).format('L')}</h3> <h4>  {Moment(this.props.date).format('dddd')}</h4>
				<div style={{display: 'flex'}}>
					{this.props.showings.map(showing =>
						<div key={showing.id}>
							<Link to={{pathname: '/book/choosetickets/' + this.props.match.params.filmId + '/' + showing.id, state: {film: this.props.location.state.film, showing: showing}}} onClick={() => this.props.updateShowing(showing)}><button className="timeblock">{Moment(showing.time).format('hh:mm a')}</button></Link>
						</div>
					)}
				</div>
			</div>
		)
	}
}