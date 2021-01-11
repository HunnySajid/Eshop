import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { FormContainer, Message, Loader } from '../../components'
import { getUser, getUserLoading, getUserAuthError } from './store/selectors';
import {loginRequest} from './store/actions';

const Login = ({location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userInfo = useSelector(getUser);
    const loading = useSelector(getUserLoading);
    const error = useSelector(getUserAuthError);

    const redirect = location.search? location.search.split('=')[1]: '';
    
    useEffect(() => {
        if(userInfo){
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    }

    return (
        <FormContainer>
            <h1>Log In</h1>
            {error && <Message variant="danger">{error}</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {loading ? <Loader /> : 
                <Button type="submit" variant="primary">Log In</Button>}
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer ? <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
