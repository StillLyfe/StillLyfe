import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add(fab,fas,faCopyright);

class Footer extends Component{


render(){
const center ={'margin':'auto','text-align':'center','padding-top':'20px'}
const date = new Date();
const year = date.getFullYear();
	return(
		<p style={center}>
			
			<FontAwesomeIcon icon = {faCopyright}/>
			{"  Styll Life "+year}
		</p>


		);
}
}
export default Footer;