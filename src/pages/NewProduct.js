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
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	// Check if values are successfully binded
	console.log(name);
	console.log(description);
	console.log(price);

	function registerUser(e) {
		e.preventDefault();

		fetch('https://csp2-ecommerce.onrender.com/products', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
			.then(res => res.json())
			.then(data => {

				console.log(data);

				if (data === true) {

					// Clear input fields
					setName('');
					setDescription('');
					setPrice('');

					Swal.fire({
						title: 'Registration successful',
						icon: 'success',
						text: 'Welcome to Happy Paws!'
					});

					history("/products");

				} else {

					Swal.fire({
						title: 'Something wrong',
						icon: 'error',
						text: 'Please try again.'
					});

				}

			})
	}

	useEffect(() => {
		// Validation to enable submit button when all fields are populated and both passwords match
		if (name !== '' && description !== '' && price !== '') {
			setIsActive(true);
		}
		else {
			setIsActive(false);
		}
	}, [name, description, price]);

	return (
		<Form onSubmit={(e) => registerUser(e)}>
			<h1>Create New Product</h1>
			<Form.Group controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter product name"
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter product description"
					value={description}
					onChange={e => setDescription(e.target.value)}
					required
				/>
			</Form.Group>


			<Form.Group className="mb-3" controlId="price">
				<Form.Label>Price</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter price"
					value={price}
					onChange={e => setPrice(e.target.value)}
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