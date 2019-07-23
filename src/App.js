import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
		<div className="Header">

		</div>
		<div className="Content">
			<Router>
				<Route exact path="/" component={Home} />
			</Router>
		</div>
		<div className="Footer">

		</div>
    </div>
  );
}

export default App;
