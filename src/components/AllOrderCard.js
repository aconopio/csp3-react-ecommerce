import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'
import React from 'react';
import { Link } from 'react-router-dom'

export default function AllOrderCard({allOrderProp}) {
    // console.log(props);
    // console.log(typeof props);

    const {_id, productId, PurchasedOn, email, userId, name, price} = allOrderProp;

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
            <Card class="card-block border">
                <Card.Body class="row p-3">
                    <div class="col-md-4">
                    <Card.Title>Order id: {_id}</Card.Title>
                    </div>
                    <div class="col-md-4">
                    <Card.Subtitle>Date:</Card.Subtitle>
                    <Card.Text>{PurchasedOn.substring(0, 10)}</Card.Text>
                    <Card.Subtitle>User email:</Card.Subtitle>
                    <Card.Text>{email}</Card.Text>
                    </div>
                    <div class="col-md-4">
                    <Card.Subtitle>Product name:</Card.Subtitle>
                    <Card.Text>{name}</Card.Text>
                    <Card.Subtitle>Price:</Card.Subtitle>
                    <Card.Text>{price}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
    )
}


// Check if the CourseCard component is getting the correct prop types
AllOrderCard.propTypes = {
    productProp: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        PurchasedOn: PropTypes.string.isRequired
    })
}