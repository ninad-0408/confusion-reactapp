import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		leaders: state.leaders,
		promotions: state.promotions
	};
}

const mapDispatchToProps = dispatch => ({

	postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => { dispatch(fetchDishes()) },
	fetchComments: () => { dispatch(fetchComments()) },
	fetchPromos: () => { dispatch(fetchPromos()) },
	resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}

	render() {

		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promosLoading={this.props.promotions.isLoading}
					promosErrMess={this.props.promotions.errMess}
					promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		const DishWithId = ({ match }) => {
			return (
				<Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errMess}
					comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
					commentsLoading={this.props.comments.isLoading}
					commentsErrMess={this.props.comments.errMess}
					postComment={this.props.postComment}
				/>
			);
		};

		const AboutPage = () => {
			return (
				<About leaders={this.props.leaders} />
			)
		}

		const ContactPage = () => {
			return(
				<Contact resetFeedbackForm={this.props.resetFeedbackForm} />
			)
		}

		return (
			<>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch location={this.props.location}>
							<Route path='/home' component={HomePage} />
							<Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
							<Route exact path='/contactus' component={ContactPage} />
                  			<Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
							<Route path='/menu/:dishId' component={DishWithId} />
							<Redirect to="/home" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
