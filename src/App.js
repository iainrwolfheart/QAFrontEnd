import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
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
				<Route exact path="/listings" component={ListingsPage} />
				<Route exact path="/film/:filmId" component={FilmInfo} />
			</Router>
		</div>
		<div className="Footer">

		</div>
    </div>
  );
}

export default App;
