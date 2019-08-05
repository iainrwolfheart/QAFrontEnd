import React from 'react';
import _ from 'lodash';
import Moment from 'moment';
import ChooseShowingDaySection from '../components/ChooseShowingDaySection';
import axios from 'axios';

export default class ChooseShowing extends React.Component {
	constructor() {
		super();

		this.state = {
			showings: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8000/film/' + this.props.match.params.filmId + '/showings')
			.then(response => this.setState({ showings: response.data }));
	}

	render() {
		return (
			<div>
				{ _.uniq(_.map(this.state.showings, _.property('time')).map(date => Moment(date).format('YYYY-MM-DD'))).map(day => {
					return <ChooseShowingDaySection {...this.props} key={day} date={day} showings={this.state.showings.filter((item) => item.time.search(day) !== -1)} />
				})}
			</div>
		);
	}
}