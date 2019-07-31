import React from 'react';
import _ from 'lodash';
import Moment from 'moment';
import ChooseShowingDaySection from '../components/ChooseShowingDaySection';

export default class ChooseShowing extends React.Component {
	constructor() {
		super();

		this.state = {
			showings: [
				{
					_id: 'jfegjeigjeigjei2232',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-25 12:00',
					screenId: 'efjjg93jg93t9ei9'
				},
				{
					_id: 'keogewohjrgkowkgow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-25 15:30',
					screenId: 'efjjg93jg93t9ei9'
				},
				{
					_id: 'keogewohjrgkohkgow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-25 17:00',
					screenId: 'gkpgkweogkwkfo'
				},
				{
					_id: 'keogewodjrgkowkgow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-25 18:20',
					screenId: 'egjwjgweoijgw'
				},
				{
					_id: 'jfegjeigjeigjei2232',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-26 12:00',
					screenId: 'efjjg93jg93t9ei9'
				},
				{
					_id: 'keogewohjrgkowkdow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-26 15:30',
					screenId: 'efjjg93jg93t9ei9'
				},
				{
					_id: 'keogewohjrgkowggow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-26 17:00',
					screenId: 'gkpgkweogkwkfo'
				},
				{
					_id: 'keogewohjrgjowkgow',
					filmId: 'fjeiogsiogewfeffe',
					time: '2019-07-26 18:20',
					screenId: 'egjwjgweoijgw'
				},
			]
		}
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