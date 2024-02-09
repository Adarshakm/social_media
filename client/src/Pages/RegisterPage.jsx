
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"


const RegisterPage = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    console.log({ Name: name, Email: email, password: password });




    const Submit = () => {
        axios.post("http://localhost:5000/register", {
            name: name,
            password: password,
            email: email
        }).then((res) => {
            console.log(res.data);
        }).catch(err => {
            console.log("error", err);
        })
    }



    return (
        <div>
            <div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter  Name" onChange={(e) => setname(e.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={Submit}  >
                    Submit
                </Button>
                <a href="/company_register">Register as Company</a>
            </div>

        </div>
    )
}

export default RegisterPage
