import { Fragment } from 'react';
import UserContext from '../UserContext'
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function NumberofOrders(){

	const { user } = useContext(UserContext);

	const [totalOrders, setTotalOrders] = useState([]);

	const numberOfOrders = () => {
		fetch('https://calm-shore-32122.herokuapp.com/orders/totalorders/')
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setTotalOrders(data.length)
		})
	}

	useEffect(() => {
		numberOfOrders() 
	}, []);

	return (
		<Fragment>
			<div class="card" style="width: 18rem;">
			  <div class="card-body">
			    <h5 class="card-title">{totalOrders}</h5>
			    <h6 class="card-subtitle mb-2 text-muted">Total Orders</h6>
			  </div>
			</div>
		</Fragment>
	)
}