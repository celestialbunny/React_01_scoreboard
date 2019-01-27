import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Player from './components/player'

class App extends Component {
	render() {
		return (
			<div className="scoreboard">
				<Header
					title="Scoreboard"
					totalPlayers={1}
				/>
				<Player
					name="Guil"
					score={50}
				/>
				<Player
					name="Treasure"
					score={90}
				/>
				<Player
					name="Ashley"
					score={85}
				/>
				<Player
					name="James"
					score={80}
				/>
			</div>
		);
	}
}

export default App;
