import React from 'react';

// class Counter extends Component {
// 	incrementScore = () => {
// 		this.setState(prevState => ({
// 			score: prevState.score + 1
// 		}));
// 	}

// 	decrementScore = () => {
// 		this.setState(prevState => ({
// 			score: prevState.score - 1
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div className="counter">
// 				<button className="counter-action decrement"> - </button>
// 				<span className="counter-score">{this.props.score}</span>
// 				<button className="counter-action increment"> + </button>
// 			</div>
// 		)
// 	}
// }

const Counter = (props) => {

	let index = props.index;

	return (
		<div className="counter">
			<button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
			<span className="counter-score">{ props.score }</span>
			<button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
		</div>
	)
}

export default Counter;