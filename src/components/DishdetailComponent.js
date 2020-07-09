import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, CardFooter } from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null) {
        const comments = dish.comments.map((comment) => {
            return (
                <div className="row" key={comment.id}>
                    <div className='col-12 ml-2'>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},{new Intl.DateTimeFormat('en-US-indian', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </div>
            );
        });
        return (
            <div className='row'>
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h2>{dish.name}</h2></CardTitle>
                            <CardText><p>{dish.description}</p></CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-5 m-1">
                    <Card className='list-unstyled'>
                        {comments}
                    </Card>
                </div>
            </div>
        );
    }
    else {

        return (
            <div>
            </div>
        );
    }
}

const Dishdetail = (props) => {
    return (
        <div>
            <RenderDish dish={props.selectedDish}/>
        </div>
    );
}

export default Dishdetail;