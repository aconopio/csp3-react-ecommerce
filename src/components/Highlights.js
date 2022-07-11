import {Card, Row, Col } from 'react-bootstrap'
import React from 'react';

export default function Highlights(){
	return(
		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem' }} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h2>Learn from Home</h2>
				    </Card.Title>
				    <Card.Text>
				      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem' }} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h2>Study now, Pay later</h2>
				    </Card.Title>
				    <Card.Text>
				      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card style={{ width: '18rem' }} className="cardHighlight p-3">
				  <Card.Body>
				    <Card.Title>
				    	<h2>Be Part of Our Community</h2>
				    </Card.Title>
				    <Card.Text>
				      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		</Row>
	)
}