import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2';

export default function Register() {

	const { user } = useContext(UserContext);
	const history = useNavigate();

	// State hooks to store the values of the input fields
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	// Check if values are successfully binded
	console.log(email);
	console.log(password1);
	console.log(password2);

	function registerUser(e) {
		e.preventDefault();

		fetch('https://csp2-ecommerce.onrender.com/users/checkEmail', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
			.then(res => res.json())
			.then(data => {

				console.log(data);

				if (data === true) {
					Swal.fire({
						title: 'Duplicate email found',
						icon: 'error',
						text: 'Kindly provide another email to complete the registration.'
					});
				} else {

					fetch('https://csp2-ecommerce.onrender.com/users/register', {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							firstName: firstName,
							lastName: lastName,
							email: email,
							password: password1
						})
					})
						.then(res => res.json())
						.then(data => {

							console.log(data);

							if (data === true) {

								// Clear input fields
								setFirstName('');
								setLastName('');
								setEmail('');
								setPassword1('');
								setPassword2('');

								Swal.fire({
									title: 'Registration successful',
									icon: 'success',
									text: 'Welcome to Happy Paws!'
								});

								history("/login");

							} else {

								Swal.fire({
									title: 'Something wrong',
									icon: 'error',
									text: 'Please try again.'
								});

							}
						})
				};

			})
		// Clear input fields
		setEmail('');
		setPassword1('');
		setPassword2('');

		//alert('Thank you for registering!');
	}

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		if ((firstName !== '' && lastName !== '' && email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {
			setIsActive(true);
		}
		else {
			setIsActive(false);
		}
	}, [firstName, lastName, email, password1, password2]);

	return (
		(user.id !== null) ?
			<Navigate to="/products" />
			:
			<Form onSubmit={(e) => registerUser(e)}>
				<h1>Register</h1>
				<Form.Group controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter first name"
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter last name"
						value={lastName}
						onChange={e => setLastName(e.target.value)}
						required
					/>
				</Form.Group>


				<Form.Group className="mb-3" controlId="userEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>


				<Form.Group className="mb-3" controlId="password1">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password1}
						onChange={e => setPassword1(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="password2">
					<Form.Label>Verify Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Verify Password"
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						required
					/>
				</Form.Group>
				{/* Conditionally render submit button based on isActive state */}
				{isActive ?
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