import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';
library.add(fab,fas);

class Home extends Component{

render(){
const cardStyle={border:'solid black '}
const pages = [
{'title':'Our Story','to':'/About'},
{'title':'Visuals','to':'/Visuals'},
{'title':'Music','to':'/Music'}

]
const cards =pages.map(pic=>{
	return(<td key={pic.title}>
			<Card style={cardStyle}>
				<Link to={pic.to}>
					<CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>
				</Link>
				<CardBody>
					
					
					<CardTitle>
					{pic.title}
					</CardTitle>
					
				
					<CardText>

					</CardText>

				
				</CardBody>
			</Card>
	</td>)
})



	return(
		<table>
			<tbody>
			<tr>
				{cards}
			</tr>
			</tbody>
		</table>


		);
}
}
export default Home;