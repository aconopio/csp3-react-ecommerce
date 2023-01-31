import React from 'react';
import { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppNavbar() {
	// State to store the user information stored in the login page
	// const [user, setUser] = useState(localStorage.getItem("email"));
	// console.log(user);

	const { user } = useContext(UserContext);

	return (

		<Navbar bg="primary" expand="lg">

			<Navbar.Brand as={Link} to="/">Happy Paws</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="container-fluid">
					<Nav.Item>
						<Nav.Link as={Link} to="/" exact>Home</Nav.Link>
					</Nav.Item>
					<Nav.Item className="me-auto">
						<Nav.Link as={Link} to="/products" exact>Shop</Nav.Link>
					</Nav.Item>
					{(user.id !== null && user.isAdmin) ?
						<React.Fragment>
							<Nav.Link>Hi {user.id}</Nav.Link>
							<NavDropdown title="Admin" id="admin-nav-dropdown">
								<LinkContainer to="/admindashboard">
									<NavDropdown.Item>Admin Dashboard</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/newproduct">
									<NavDropdown.Item>Create Product</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/adminproducts">
									<NavDropdown.Item>Update Products</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/allorders">
									<NavDropdown.Item>All orders</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<Nav.Link as={Link} to="/logout" exact>Logout</Nav.Link>
						</React.Fragment>
						:
						<React.Fragment>
						</React.Fragment>
					}
					{(user.id !== null && user.isAdmin === false) ?
						<React.Fragment>
							<Nav.Link>Hi, username</Nav.Link>
							<Nav.Link as={Link} to="/myorders" exact>My Orders</Nav.Link>
							<Nav.Link as={Link} to="/logout" exact>Logout</Nav.Link>
						</React.Fragment>
						:
						<React.Fragment>
						</React.Fragment>
					}
					{(user.id === null) ?
						<React.Fragment>
							<Nav.Item>
								<Nav.Link as={Link} to="/login" exact>Login</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link as={Link} to="/register" exact>Register</Nav.Link>
							</Nav.Item>
						</React.Fragment>
						:
						<React.Fragment>
						</React.Fragment>
					}


				</Nav>
			</Navbar.Collapse>

		</Navbar>
	)
}