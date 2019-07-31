import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

export default class ChooseShowingDaySection extends React.Component {
	render() {
		return (
			<div>
				<h1>{Moment(this.props.date).format('L')}</h1> <h2> - {Moment(this.props.date).format('dddd')}</h2>
				{this.props.showings.map(showing =>
					<div key={showing._id}>
						<Link to={'/choosetickets/' + this.props.match.params.filmId + '/' + showing._id}><button>{Moment(showing.time).format('hh:mm a')}</button></Link>
					</div>
				)}
			</div>
		)
	}
}