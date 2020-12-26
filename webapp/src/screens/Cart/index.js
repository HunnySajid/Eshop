import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, ListGroup, Image, Button, Form } from 'react-bootstrap';
import { getCartItems } from './store/selectors';
import { addCartItem, removeCartItem } from './store/actions';
import { Message } from '../../components';
const Cart = ({ history }) => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();

    const removeItemHandler = (itemId) => {
        dispatch(removeCartItem(itemId));
    }
    const checkoutHandler = () => {
        history.push('/login');
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {
                    !cartItems.length ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> :
                        <ListGroup variant="flush">
                            {cartItems.map(item =>
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`product/${item._id}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                as='select' value={item.qty} onChange={(e) => dispatch(addCartItem({ ...item, qty: e.target.value }))}>
                                                {[...Array(item.countInStock).keys()].map(val =>
                                                    <option key={val + 1} value={val + 1}>{val + 1}</option>)}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="light" onClick={() => removeItemHandler(item._id)}>
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)}
                        </ListGroup>
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, currentItem) => Number(acc) + Number(currentItem.qty), 0)}) Items</h2>
                            ${cartItems.reduce((acc, current) => Number(acc) + (Number(current.qty) * Number(current.price)), 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default Cart;
