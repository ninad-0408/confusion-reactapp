import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
		};
	}

	render() {

		const HomePage = ()=>{
			return(
				<Home/>
			)
		}
		return (
			<>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes} />} />
					<Redirect to='/home'/>
				</Switch>
				<Footer />
			</>
		);
	}
}

export default Main;
