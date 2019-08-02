import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppNavbar from './components/Navbar';
import FooterPage from './components/Footer';
import Screeninfo from './pages/Screeninfo';
import ChooseShowing from './pages/ChooseShowing';
import ChooseTickets from './pages/ChooseTickets';
import ListingsPage from './pages/ListingsPage';
import FilmInfo from './pages/FilmInfo';
import TicketBooking from './pages/TicketBooking';

function App() {
	return (
		<div className="bg">
			<head>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossorigin="anonymous"
				/>
				<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.7/css/mdb.min.css" rel="stylesheet"></link>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			</head>
			<div className="Header">
				<AppNavbar />
			</div>
			<div className="Content">
				<Router>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/screeninfo" component={Screeninfo} />
          <Route path="/listings" component={ListingsPage} />
          <Route path="/film/:filmId" component={FilmInfo} />
          <Route path="/book" component={TicketBooking} />
				</Router>
			</div >
			<div className="Footer">
				<FooterPage />
			</div>

export default App;