import { Fragment } from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
// import CourseCard from '../components/CourseCard';
import React from 'react';
import UserContext from '../UserContext'


export default function Home(){

	const data = {
	    title: "Happy Paws ",
	    content: "Your furbaby's health buddy",
	    destination: "/products",
	    label: "Shop here"
	}

	return (
		<Fragment>
			<Banner data={data}/>
			<h4>Featured Products</h4>
			<Highlights />
		</Fragment>
	)
}