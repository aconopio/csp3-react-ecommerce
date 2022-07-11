import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import UserContext from '../UserContext'

export default function Login(){

    // Allows us to consume the User context object and its properties to use for user validation
    const {user, setUser} = useContext(UserContext);

        // State hooks to store the values of the input fields
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        // State to determine whether submit button is enabled or not
        const [isActive, setIsActive] = useState(true);

        function authenticate(e) {

            // Prevents page redirection via form submission
            e.preventDefault();

            // Process a fetch request to the corresponding backend API
            /* Syntax:
                fetch('url', {options})
                .then(res => res.json())
                .then(data => {})
            */

            fetch('http://localhost:4000/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(typeof data.access !== "undefined"){
                    // The JWT will be used to retrieve user information
                    localStorage.setItem('token', data.access);
                    retrieveUserDetails(data.access);
                    // Sweet alert message
                    Swal.fire({
                        title: "Login Successful",
                        icon: "success",
                        text: "Welcome to Happy Paws!"
                    })
                }
                else{
                    Swal.fire({
                        title: "Authentication failed",
                        icon: "error",
                        text: "Check your login details and try again."
                    })
                }
            })


            // Set the email of the user in the local storage
            /*
                localStorage.setItem('propertyName', value);
            */
            // from useState(localstorage.getItem("email"))
            // localStorage.setItem('email', email);

            // set local user state to have properties obtained from local storage
            // setUser({
            //     email: localStorage.getItem('email')
            // })

            // Clear input fields after submission
            setEmail('');
            setPassword('');

            // alert(`${email} has been logged in! Welcome back!`);

        }

        // "retrieveUserDetails" function to convert JWT from the fetch request

        const retrieveUserDetails = (token) => {
            fetch('http://localhost:4000/users/details',{
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser({
                    // validation acrross application
                    id: data.id,
                    isAdmin: data.isAdmin
                })
            })
        }

        useEffect(() => {

            // Validation to enable submit button when all fields are populated and both passwords match
            if(email !== '' && password !== ''){
                setIsActive(true);
            }else{
                setIsActive(false);
            }

        }, [email, password]);


    return (
        (user.id !== null) ?
            <Navigate to="/products" />
        :
        <Form onSubmit={(e) => authenticate(e)}>
        <h1>Login</h1>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            { isActive ? 
                <Button variant="primary" type="submit" id="submitBtn">
                    Submit
                </Button>
                : 
                <Button variant="danger" type="submit" id="submitBtn" disabled>
                    Submit
                </Button>
            }

        </Form>
    )
}