import React from 'react';
import '../App.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish }) {
    return (
        <Card className='cursor-pointer' >
            <Link to={`/menu/${dish.id}`} >
                <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

const Menu = (props) => {
    document.title='Menu | Confusion';
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-sm-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
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