import React from 'react';
// import React, { Component } from 'react';

import Stats from './Stats';

// class Header extends Component {
// 	render() {
// 		return(
// 			<header>
// 			<Stats players={props.players} />
// 				<h1>{ this.props.title }</h1>
// 			</header>
// 		)
// 	}
// }

const Header = (props) => {
	return ( 
		<header>
			<Stats players={props.players} />
			<h1>{ props.title }</h1>
		</header>
	)
}

export default Header;