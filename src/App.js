import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Player from './components/player'

const players = [
	{
		'name': 'Guil',
		'score': 50,
		'id': 1
	},
	{
		'name': 'Treasure',
		'score': 85,
		'id': 2
	},
	{
		'name': 'Ashley',
		'score': 95,
		'id': 3
	},
	{
		'name': 'James',
		'score': 80,
		'id': 4
	}
]

class App extends Component {
	render() {
		return (
			<div className="scoreboard">
				<Header
					title="Scoreboard"
					totalPlayers={players.length}
				/>
				{players.map((player) =>
					<Player
						name={player.name}
						key={player.id.toString()}
					/>
				)}
			</div>
		);
	}
}

export default App;
