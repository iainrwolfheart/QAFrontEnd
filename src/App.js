import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import ChooseShowing from './pages/ChooseShowing';
import ChooseTickets from './pages/ChooseTickets';
import ListingsPage from './pages/ListingsPage';
import FilmInfo from './pages/FilmInfo';

function App() {
  return (
    <div className="App">
		<div className="Header">

		</div>
		<div className="Content">
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/listings" component={ListingsPage} />
				<Route path="/film/:filmId" component={FilmInfo} />
				<Route path="/chooseshowing/:filmId" render={(props) => <ChooseShowing {...props} />} />
				<Route path="/choosetickets/:filmId/:showingId" render={(props) => <ChooseTickets {...props} />} />
			</Router>
		</div>
		<div className="Footer">

		</div>
    </div>
  );
}

export default App;