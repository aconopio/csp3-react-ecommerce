import { Fragment } from 'react';
import UserContext from '../UserContext'
import { useContext, useState, useEffect } from 'react';
import NumberOfOrders from '../components/NumberOfOrders';

export default function AdminDashboard(){

	const { user } = useContext(UserContext);

	const [totalProducts, setTotalProducts] = useState([]);
	const [totalOrders, setTotalOrders] = useState([]);

	// Retrieves the courses from the database upon initial render of the "Courses" component
	const numberOfProducts = () => {
		fetch('https://calm-shore-32122.herokuapp.com/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setTotalProducts(data.length)
		})
	}

	const numberOfOrders = () => {
		fetch('https://calm-shore-32122.herokuapp.com/orders/totalorders/')
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setTotalOrders(data.length)
		})
	}

	useEffect(() => {
		numberOfProducts() 
	}, []);

	useEffect(() => {
		numberOfOrders() 
	}, []);

	return (
		<Fragment>
		<h2>Admin Dashboard</h2>
		<div class="card-block border">
		  <div class="row p-3">
		  	<div class="col-md-6">
		    <h5 class="card-title">{totalProducts}</h5>
		    <h6 class="card-subtitle mb-2 text-muted">Number of products</h6>
		    </div>
		    <div class="col-md-6">
		    <h5 class="card-title">{totalOrders}</h5>
		    <h6 class="card-subtitle mb-2 text-muted">Number of orders</h6>
		    </div>
		  </div>
		</div>
		</Fragment>
	)
}
