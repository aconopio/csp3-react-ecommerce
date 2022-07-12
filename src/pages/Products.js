import { Fragment, useEffect, useState, useContext } from 'react';
// import coursesData from '../data/coursesData'
import ProductCard from '../components/ProductCard'
import React from 'react';
import UserContext from '../UserContext'

export default function Courses() {
	// Checks to see if the mock data was captured
	//console.log(coursesData);
	//console.log(coursesData[0]);

	const { user } = useContext(UserContext);

	// State that will be used to store the courses retrieved from the database
	const [courses, setCourses] = useState([]);

	// Retrieves the courses from the database upon initial render of the "Courses" component
	const fetchData = () => {
		fetch('https://calm-shore-32122.herokuapp.com/products/active')
		.then(res => res.json())
		.then(data => {
			console.log(data);

			//Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" component
			setCourses(data.map(product => {
				
				return (
					<ProductCard key={product._id} productProp={product} />
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