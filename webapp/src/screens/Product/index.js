import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { setProductId, getProductRequest } from './store/actions';
import { getProduct, getProductLoading, getProductError } from './store/selectors';
import { addCartItem } from '../Cart/store/actions';
import { Rating, Message, Loader } from '../../components';

const Product = ({ match }) => {
    const { params } = match;
    const [qty, setQty] = useState(1);
    const product = useSelector(getProduct);
    const loading = useSelector(getProductLoading);
    const error = useSelector(getProductError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProductId(params.productId));
        dispatch(getProductRequest());
    }, [dispatch, params]);

    const addToCartHandler = () => {
        dispatch(addCartItem({ ...product, qty: Number(qty) }));
    }

    return (
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            {error && <Message>{error}</Message>}
            {loading ? <Loader /> :
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                            <ListGroup.Item>{product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col>${product.price}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>{product.countInStock ? 'In Stock' : 'Out of Stock'}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(val =>
                                                        <option key={val + 1} value={val + 1}>{val + 1}</option>)}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block" type="button" disabled={!product.countInStock}>Add to Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>}

        </>
    )
}

export default Product;
