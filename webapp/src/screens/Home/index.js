import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getProductsRequest } from './store/actions';
import { getProducts, getProductsLoading, getProductsError } from './store/selectors';
import { Product, Loader, Message } from '../../components';

const Home = () => {
    const products = useSelector(getProducts);
    const loading = useSelector(getProductsLoading);
    const error = useSelector(getProductsError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {loading && <Loader />}
            <Row>
                {products.map(product =>
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>)}
            </Row>
            {error && <Message variant="warning">{error}</Message>}
        </>
    )
}

export default Home;