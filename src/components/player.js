import React, { Component } from 'react';
import Counter from './counter';

class Player extends Component {
	render() {
		return (
			<>
				<div className="player">
					<span className="player-name">
						{this.props.name}
					</span>
					<Counter />
				</div>
			</>
		)
	}
}

export default Player;