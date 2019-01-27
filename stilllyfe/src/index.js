import App from './App';
import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { render } from 'react-dom';

ReactDOM.render((
	<BrowserRouter>
			<Fragment>
				<Navigation logoTitle="Eric Porter" />
					  		<Switch>
						  		<Route  exact path='/' component={Home}/>
						  		<Route path='/Music' component={Music}/>
						  		<Route path='/About' component={About}/>
						  		<Route path='/Visuals' component={Visuals}/>


				</Switch>
				<Footer/>
			</Fragment>

  	</BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
