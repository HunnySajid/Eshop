import React, {useState, useEffect} from 'react'
import { Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import { FormContainer, Message, Loader } from '../../components'
import { getUser, getUserProfileLoading, getUserAuthError } from './store/selectors';
import {getProfileRequest, updateProfileRequest} from './store/actions';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const dispatch = useDispatch();
    const userInfo = useSelector(getUser);
    const loading = useSelector(getUserProfileLoading);
    const error = useSelector(getUserAuthError);

    // useEffect(() => {
    //     dispatch(getProfileRequest());
    // }, []);

    useEffect(() => {
        if(userInfo){
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(!name || !email  ){
            setMessage("Name and Email can't be empty");
        }
        else {
            dispatch(updateProfileRequest({name, email}));
        }
    }

    return (
        <FormContainer>
            <h1>Profile</h1>
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
                {loading ? <Loader /> : 
                <Button type="submit" variant="primary">Update</Button>}
            </Form>
        </FormContainer>
    )
}

export default Profile
