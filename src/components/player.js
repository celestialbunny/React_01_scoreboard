import React from 'react';
import Counter from './Counter';

// class Player extends Component {
// 	render() {
// 		return (
// 			<>
// 				<div className="player">
// 					<span className="player-name">
// 						<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
// 						{this.props.name}
// 					</span>
// 					<Counter />
// 				</div>
// 			</>
// 		)
// 	}
// }

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
				{ props.name }
			</span>

			<Counter
				index={props.index}
				score={props.score}
				changeScore={props.changeScore}
			/>
		</div>
	)
}

export default Player;