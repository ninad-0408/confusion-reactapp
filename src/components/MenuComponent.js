import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        console.log('Menu constructor invoked');
    }

    componentDidMount() {
        console.log('Menu componentDidMount invoked');
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-sm-5 m-1">
                    <Card onClick={() => { this.props.onClick(dish.id) }}>
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
            
            <div className='row'>
                {menu}
            </div>
        );

        console.log('Menu render invoked');
    }
}

export default Menu;