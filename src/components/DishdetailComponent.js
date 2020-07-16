import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, CardFooter, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, Col, Row, Label, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: '1',
            author: '',
            comment: '',
            isModalOpen: true
        };
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    handleModalOpen() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    handelSubmit(values) {
        console.log(values);
        alert('The Comment is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <br />
                <button className='btn btn-outline-secondary' onClick={this.handleModalOpen}><span className="fa fa-pencil"></span> Submit Comment</button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModalOpen}>
                    <ModalHeader closebutton>
                        <h4 className='modal-title d-inline'>Submit Comment</h4>
                        <button className='ml-5 close' onClick={this.handleModalOpen}>
                            <span className="fa fa-close"></span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handelSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor='rating' xs={12}>Rating</Label>
                                <Col xs={12}>
                                    <Control.select model='.rating' id='rating' name='rating' className='form-control'>
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='author' xs={12}>Your Name</Label>
                                <Col xs={12}>
                                    <Control.text model='.author' id='author' name='author' className='form-control'
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show='touched'
                                        messages={{
                                            required: 'Name is Required ',
                                            maxLength: 'Name cannot exceed 15 charecters',
                                            minLength: 'Name cannot be less than 3 charecters'
                                        }
                                        } />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='comment' xs={12}>Comment</Label>
                                <Col xs={12}>
                                    <Control.textarea rows={6} model='.comment' id='comment' name='comment' className='form-control' />
                                </Col>
                            </Row>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    };
}

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
            <CommentForm />
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