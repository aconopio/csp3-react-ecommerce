import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';


export default function ProductView() {

	const { user } = useContext(UserContext);

	// Allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling
	const history = useNavigate();

	// The "useParams" hook allows us to retrive the courseId passed via the URL
	const { productId } = useParams();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0);

	const checkout = (productId) => {
		fetch('https://calm-shore-32122.herokuapp.com/users/checkout', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			if(data){
				Swal.fire({
					title: "Successfully purchased",
					icon: "success",
					text: "You have successfully purchased this product."
				})
				history("/products/");
			}
			else{
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				})
			}
		})
	}

	useEffect(()=> {

		console.log(productId);

		fetch(`https://calm-shore-32122.herokuapp.com/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
		})

	}, [productId]);


	return(
		<Container>
			<Row>
				<Card style={{ width: '18rem' }}>
				  <Card.Body className="text-center">
				    <Card.Title>{name}</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Description:</Card.Subtitle>
				    <Card.Text>{description}</Card.Text>
				    <Card.Subtitle className="mb-2 text-muted">Price:</Card.Subtitle>
				    <Card.Text>Php {price}</Card.Text>
				    { user.id !== null ?
				    	<Button variant="primary" onClick={() => checkout(productId)} block>Order</Button>
				    	:
				    	<Link className="btn btn-danger btn-block" to="/login">Log in to Order</Link>

				    }
				    
				  </Card.Body>
				</Card>
			</Row>
		</Container>
	)
}