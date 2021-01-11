import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {LOGIN_ROUTE, CART_ROUTE, PROFILE} from '../navigation/routes';
import {getUser} from '../screens/Auth/store/selectors';
import { logoutRequest } from '../screens/Auth/store/actions';

const Header = () => {
    const userInfo = useSelector(getUser);
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logoutRequest());
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >Eshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to={CART_ROUTE}>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo? <NavDropdown title={userInfo.name} id="username">
                            <LinkContainer to={PROFILE}>
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>    
                            </NavDropdown>
                            : 
                            <LinkContainer to={LOGIN_ROUTE}>
                            <Nav.Link ><i className="fas fa-user"></i>Log In</Nav.Link>
                            </LinkContainer>}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}
export default Header;
