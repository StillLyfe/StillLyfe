import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab,fas);

class Music extends Component{


render(){



	return(
		<h1> Music </h1>


		);
}
}
export default Music;