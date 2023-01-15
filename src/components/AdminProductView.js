import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';

export default function AdminProductView() {

	const { user } = useContext(UserContext);

	// Allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling
	const history = useNavigate();

	// The "useParams" hook allows us to retrive the courseId passed via the URL
	const { productId } = useParams();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0);
	const [isActive, setIsActive] = useState(true)
	// State to determine whether submit button is enabled or not
	// const [isActive, setIsActive] = useState(false);

	function updateProduct(e) {
		e.preventDefault();

		fetch(`https://csp2-ecommerce.onrender.com/products/${productId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
				isActive: isActive
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);

				if (data === true) {
					Swal.fire({
						title: "Successfully updated product",
						icon: "success",
					})
					history('/adminproducts');
				}
				else {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again."
					})
				}
			})
	}

	useEffect(() => {

		console.log(productId);

		fetch(`https://csp2-ecommerce.onrender.com/products/${productId}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);

				setName(data.name);
				setDescription(data.description);
				setPrice(data.price);
				setIsActive(data.isActive);
			})

	}, [productId]);

	return (
		<Container>
			<Row>
				<Form onSubmit={(e) => updateProduct(e)}>
					<h1>Update Product</h1>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder={name}
							value={name}
							onChange={e => setName(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="description">
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							placeholder={description}
							value={description}
							onChange={e => setDescription(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="price">
						<Form.Label>Price</Form.Label>
						<Form.Control
							type="number"
							placeholder={price}
							value={price}
							onChange={e => setPrice(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="isActive">
						<Form.Label>isActive</Form.Label>
						<Form.Control
							type="boolean"
							placeholder={isActive}
							value={isActive}
							onChange={e => setIsActive(e.target.value)}
							required
						/>
					</Form.Group>
					<Button variant="primary" type="submit" id="submitBtn">
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	)
}