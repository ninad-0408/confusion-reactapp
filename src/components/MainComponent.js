import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			leaders: LEADERS,
			promotions: PROMOTIONS
		};
	}

	render() {

		const HomePage = () => {
			return (
				<Home dish={this.state.dishes.filter((dish) => dish.featured == true)[0]} comment={this.state.comments.filter((comment) => comment.featured == true)[0]} leader={this.state.leaders.filter((leader) => leader.featured == true)[0]} promotion={this.state.promotions.filter((promotion) => promotion.featured == true)[0]} />
			)
		}

		const AboutPage = () => {
			return(
				<About leaders={this.state.leaders} />
			)
		}

		const DishWithId = ({ match }) => {
			return (
				<Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

			)
		}

		return (
			<>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/aboutus' component={AboutPage} />
					<Route exact path='/contactus' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</>
		);
	}
}

export default Main;
