import React, { Component } from 'react';

class AddPlayerForm extends Component {

	/**
	 * Remember to comment out the state while using the 'createRef' method
	 */
	state = {
		value: ''
	}

	/**
	 * Another way to get data input from user such as form
	 * However, this is not the conventional way and the original way of handling setState is *highly* recommended
	 */
	// playerInput = React.createRef();

	handleValueChange = (e) => {
		this.setState({ value: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		/**
		 * The 2 lines below are meant for 'createRef' purpose
		 */
		// this.props.addPlayer(this.playerInput.current.value);
		// e.currentTarget.reset();

		/**
		 * Toggle the 2 lines below if using 'createRef' method
		 */
		this.props.addPlayer(this.state.value);
		this.setState({value: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					// ref={this.playerInput}	// The line below is used for the createRef
					/**
					 * The two line referencing 'value' and 'onChange' can be omitted if using 'createRef' method
					 */
					value={this.state.value}
					onChange={this.handleValueChange}
					placeholder="Enter a player's name"
				/>

				<input
					type="submit"
					value="Add Player"
				/>
			</form>
		)
	}
}

export default AddPlayerForm;