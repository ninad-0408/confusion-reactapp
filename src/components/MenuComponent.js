import React from 'react';
import '../App.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => { onClick(dish.id) }} className='dish' >
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5">
                <CardTitle><h2>{dish.name}</h2></CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-sm-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}

export default Menu;