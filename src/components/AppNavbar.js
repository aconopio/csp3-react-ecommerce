import React from 'react';
import { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavbar(){
	// State to store the user information stored in the login page
	// const [user, setUser] = useState(localStorage.getItem("email"));
	// console.log(user);

	const { user } = useContext(UserContext);

	return (

		<Navbar bg="primary" expand="lg">
		  
		    <Navbar.Brand as={Link} to="/">Happy Paws</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
		        <Nav.Link as={Link} to="/products" exact>Products</Nav.Link>
		        {(user.id !== null) ?
		        	<React.Fragment>
		        	<Nav.Link as={Link} to="/logout" exact>Logout</Nav.Link>
		        	<Nav.Link as={Link} to="/myorders" exact>My Orders</Nav.Link>
		        	</React.Fragment>
		        	:
		        	<React.Fragment>
		        		<Nav.Link as={Link} to="/login" exact>Login</Nav.Link>
		        		<Nav.Link as={Link} to="/register" exact>Register</Nav.Link>
		        	</React.Fragment>
		        }
		        
		        
		      </Nav>
		    </Navbar.Collapse>
		  
		</Navbar>
	)
}