import React from 'react';
import '../App.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish }) {
    return (
        <Card className='cursor-pointer' >
            <Link to={`/menu/${dish.id}`} >
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-sm-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <br />
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}

export default Menu;