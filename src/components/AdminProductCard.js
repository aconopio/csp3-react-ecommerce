import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'
import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductCard({productProp}) {
    // console.log(props);
    // console.log(typeof props);

    const {_id, name, description, price, isActive, createdOn} = productProp;

    // Use the state hook for this component to be able to store its state
    // State are used to keep track of information related to individual components
    // Syntax:
        // const [getter, setter] = useState(initialGetterValue);

    // const [count, setCount] = useState(0);
    // console.log(useState(0));

    // Use state hook for getting and setting the seats for this course
    // const [seats, setSeats] = useState(30);

    // Function that keeps track of enrollees for a course
    // function enroll(){
    //     if(seats > 0){
    //         setCount(count + 1);
    //         console.log('Enrollees ' + count);
    //         setSeats(seats - 1);
    //         console.log('Seats' + seats);
    //     }
    //     else{
    //         alert("No more seats available");
    //     }
    // }


    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Link className="btn btn-primary" to={`/adminproducts/${_id}`}>Edit</Link>
            </Card.Body>
        </Card>
    )
}


// Check if the CourseCard component is getting the correct prop types
ProductCard.propTypes = {
    productProp: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}