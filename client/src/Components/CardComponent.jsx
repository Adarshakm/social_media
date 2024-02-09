import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardComponent = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Java Developer</Card.Title>
                    <p>experience :2 years </p>
                    <p>salary : 50000</p>
                    <p>Location : Bangalore</p>
                    <Link to="/apply_job">
                        <Button variant="primary">Apply</Button>
                    </Link>

                </Card.Body>
            </Card>

        </div>
    )
}

export default CardComponent
