import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
	render() {
		// const {
		// 	name,
		// 	id,
		// 	score,
		// 	index,
		// 	removePlayer,
		// 	changeScore
		// } = this.props;

		return (
			<>
				<div className="player">
					<span className="player-name">
						<button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id) }>✖</button>
						<Icon isHighScore={this.props.isHighScore} />
						{this.props.name}
					</span>
					<Counter
						index={this.props.index}
						score={this.props.score}
						changeScore={this.props.changeScore}
					/>
				</div>
			</>
		)
	}
}

// const Player = (props) => {
// 	return (
// 		<div className="player">
// 			<span className="player-name">
// 				<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
// 				{ props.name }
// 			</span>

// 			<Counter
// 				index={props.index}
// 				score={props.score}
// 				changeScore={props.changeScore}
// 			/>
// 		</div>
// 	)
// }

Player.propTypes = {
	changeScore: PropTypes.func,
	removePlayer: PropTypes.func,
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	id: PropTypes.number,
	index: PropTypes.number,
	isHighScore: PropTypes.bool
}

export default Player;