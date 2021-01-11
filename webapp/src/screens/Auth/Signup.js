import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { FormContainer, Message, Loader } from '../../components'
import { getUser, getUserLoading, getUserAuthError } from './store/selectors';
import {signupRequest} from './store/actions';

const Signup = ({location, history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
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
        
        if(!name || !email || !password ){
            setMessage("Name, Email and Password can't be empty");
        }
        if(password !== confirmPassword){
            setMessage('Passwords do not match');
        }
        else {
            dispatch(signupRequest(name, email, password));
        }
    }

    return (
        <FormContainer>
            <h1>Log In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {message && <Message variant="danger">{message}</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
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
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                {loading ? <Loader /> : 
                <Button type="submit" variant="primary">Sign Up</Button>}
            </Form>
            <Row className="py-3">
                <Col>
                    Already Registered ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Signup
