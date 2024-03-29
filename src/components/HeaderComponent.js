import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Jumbotron, Collapse, Modal, ModalHeader, ModalBody, Button, Input, Form, FormGroup, Label, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        if (this.state.isNavOpen == false)
            this.setState({ isNavOpen: true });
        else
            this.setState({ isNavOpen: false });
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
        this.setState({ isNavOpen: false });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <>
                <Navbar dark expand='sm' className='sticky-top'>
                    <div className="container">
                        <NavbarBrand href="/" className='mr-auto'>
                            <img src="assets/images/logo.png" alt="Restorante Con Fusion" className="img-fluid" height='30' width='41' />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}>
                            <span className="navbar-toggler-icon"></span>
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home' onClick={this.toggleNav}>
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus' onClick={this.toggleNav}>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu' onClick={this.toggleNav}>
                                        <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus' onClick={this.toggleNav}>
                                        <span className="fa fa-lg fa-address-card"></span> Contact
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button></NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup row>
                                <Label htmlFor='username' className='col-md-2'>Username</Label>
                                <Col md={10}>
                                    <Input type='text' id='username' placeholder='Username' innerRef={(input) => this.username = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='password' className='col-md-2'>Password</Label>
                                <Col md={10}>
                                    <Input type='password' id='password' placeholder='Password' innerRef={(input) => this.password = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className='offset-2'>
                                    <Input type='checkbox' innerRef={(input) => this.remember = input} />
                                    <strong>Remember me</strong>
                                </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button className='btn bg-primary'>Login</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;
