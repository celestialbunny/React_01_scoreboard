import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

// class Header extends Component {
// 	render() {
// 		return(
// 			<header>
// 			<Stats players={ this.props.players } />
// 				<h1>{ this.props.title }</h1>
// 				<Stopwatch />
// 			</header>
// 		)
// 	}
// }

const Header = ({players, title}) => {
	return ( 
		<header>
			<Stats players={players} />
			<h1>{ title }</h1>
			<Stopwatch />
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
	title: 'Scoreboard'
}

export default Header;