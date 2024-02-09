import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateProfilePage = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Educational Details</Form.Label>
                    <Form.Control type="text" placeholder="Enter Educational details" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Highest Qualification</Form.Label>
                    <Form.Control type="text" placeholder="Enter Highest Qualification" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Programming Language</Form.Label>
                    <Form.Control type="text" placeholder="Enter Programming Language" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Company Name" />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateProfilePage
