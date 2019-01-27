import React from 'react';
// import React, { Component } from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

// class Header extends Component {
// 	render() {
// 		return(
// 			<header>
// 			<Stats players={props.players} />
// 				<h1>{ this.props.title }</h1>
// 				<Stopwatch />
// 			</header>
// 		)
// 	}
// }

const Header = (props) => {
	return ( 
		<header>
			<Stats players={props.players} />
			<h1>{ props.title }</h1>
			<Stopwatch />
		</header>
	)
}

export default Header;