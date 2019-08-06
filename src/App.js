import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppNavbar from './components/Navbar';
import FooterPage from './components/Footer';
import Screens from './pages/Screeninfo';
import Placestogo from './pages/Placestogo';
import discussionsboard from './pages/DiscussionsBoard';
import FilmInfo from './pages/FilmInfo';
import ListingsPage from './pages/ListingsPage';
import TicketBooking from './pages/TicketBooking';
import certifications from './pages/certifications';
import ListingsPage1 from './pages/upcomings';
import ContactUs from './pages/ContactUs';
import GettingHere from './pages/GettingHere';


function App() {
	return (
		<div className="bg">
				<Router>
				<div className="Header">
					<AppNavbar />
				</div>
				<div className="Content">
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/screens" component={Screens} />
					<Route exact path="/placestogo" component={Placestogo} />
					<Route exact path="/discussionsboard" component={discussionsboard} />
					<Route exact path="/upcomings" component={ListingsPage1} />
					<Route path="/listings" component={ListingsPage} />
					<Route exact path="/film/:filmId" component={FilmInfo} />
					<Route exact path="/certifications" component={certifications} />
					<Route path="/book" component={TicketBooking} />
				</div>
				<div className="Footer">
						<FooterPage />
					</div>
			</Router>
		</div>
			);
		}
		
export default App;