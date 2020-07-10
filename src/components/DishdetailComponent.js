import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, CardFooter, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {

    return (
        <div className="col-12 col-sm-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                    <CardText><p>{dish.description}</p></CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {

    const commes = comments.map((comment) => {
        return (
            <div className='col-12 ml-1' key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author},{new Intl.DateTimeFormat('en-US-indian', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        );
    });

    return (
        <div className='col-12 col-sm-5 m-1'>
            <Card>
                {commes}
            </Card>
        </div>
    )
}


const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <br />
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
        </div>

    );
}

export default Dishdetail;