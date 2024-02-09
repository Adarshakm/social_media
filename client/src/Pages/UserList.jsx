import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap"


const UserList = () => {
    return (
        <div>
            <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
            />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Jhon</Card.Title>
                    <p>skill : </p>
                    <p>experience : </p>
                    <Button variant="primary">ok</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default UserList
