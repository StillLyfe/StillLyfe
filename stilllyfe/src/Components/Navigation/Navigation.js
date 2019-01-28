import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab,fas);

class Navigation extends Component{


render(){

const links =[{'to':'/','label':'Home'},{'to':'/Music','label':'Music'},{'to':'/Visuals','label':'Visuals'},{'to':'/About','label':'Our Story'}];

const navlinks = links.map(link=>{
	return(
		<NavLink key={link.label} to={link.to} activeClassName="active"> {link.label}</NavLink>
		)
})



	return(
		
		<div>
		{navlinks}
		</div>

		);
}
}
export default Navigation;