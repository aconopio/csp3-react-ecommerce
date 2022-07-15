import {Card, Row, Col, Button } from 'react-bootstrap'
import React from 'react';
import UserContext from '../UserContext'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Highlights(){
	return(
		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem', height: '15rem' }} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h5>Special Dog Puppy Dry Dog Food</h5>
				    </Card.Title>
				    <Card.Text>
				      A complete and balanced food for puppies. Lamb and Rice Flavor. Omega 3 and 6 - Healthy Shiny Coat.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem', height: '15rem' }} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h5>Brit Care 250g Puppy Milk Replacer</h5>
				    </Card.Title>
				    <Card.Text>
				      Milk replacer for newborn puppies, & pregnant, lactating and convalescing dogs. Builds up bones and teeth.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem', height: '15rem'}} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h5>Temptations Tuna Cat Treats 85g</h5>
				    </Card.Title>
				    <Card.Text>
				      TEMPTATIONS treats have a scrumptious, crunchy outer shell with an irresistibly soft, tasty centre cats will do anything for.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		</Row>
	)
}