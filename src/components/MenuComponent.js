import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state={
            selectedDish: null
        };
    }

    onDishSelect(dish)
    {
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><h2>{dish.name}</h2></CardTitle>
                        <CardText><p>{dish.description}</p></CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            
                return (
                    <div>
                        
                    </div>
                );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-sm-5 m-1">
                    <Card onClick={()=> {this.onDishSelect(dish)}}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle><h2>{dish.name}</h2></CardTitle>
                            {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;