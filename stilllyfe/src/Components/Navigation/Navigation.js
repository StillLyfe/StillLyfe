import React, { Component, Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css';

library.add(fab,fas);

class Navigation extends Component{


render(){
const links =[{'to':'/','label':'Home'},{'to':'/Music','label':'Music'},{'to':'/Visuals','label':'Visuals'},{'to':'/About','label':'Our Story'}];
const navStyle = {'text-decoration':'none','margin-bottom':'5px','margin-top':'0'}
const nomargin = {'margin-bottom':'0'}

const navlinks = links.map(link=>{
	return(
		
		<li>
			<Link  key={link.label} to={link.to}> {link.label}</Link>
		</li>
		
		)
})



	return(
		<Fragment>
			<nav>
				<h1 className="logo"> Styll Life </h1>
				<ul >
					{navlinks}
				</ul>
			</nav>
		</Fragment>

		);
}
}
export default Navigation;