import { Fragment, useEffect, useState, useContext } from 'react';
// import coursesData from '../data/coursesData'
import OrderCard from '../components/OrderCard'
import React from 'react';
import UserContext from '../UserContext'
import Swal from 'sweetalert2';

export default function MyOrders() {
	// Checks to see if the mock data was captured
	//console.log(coursesData);
	//console.log(coursesData[0]);

	
	const { user, setUser } = useContext(UserContext);

	// State that will be used to store the courses retrieved from the database
	const [courses, setCourses] = useState([]);

	// Retrieves the courses from the database upon initial render of the "Courses" component
	const fetchData = () => {
		fetch('https://calm-shore-32122.herokuapp.com/users/myorders/', {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			// Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" component
			setCourses(data.purchases.map(order => {
				
				return (
					<OrderCard key={order._id} orderProp={order} />
				);
			}))
			// setCourses(data);
		})
	}


	useEffect(() => {
		fetchData()
	}, []);

	
	return(
		<Fragment>
			{courses}
		</Fragment>
	)
}