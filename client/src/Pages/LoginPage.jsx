import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const LoginPage = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    console.log({ Email: email, Password: password });


    const Submit = () => {
        axios.post("http://localhost:5000/signin", {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data.token); 
            localStorage.setItem("jwt", res.data.token)
            

        }).catch(err => {
            console.log("error", err);
        })

    }

    return (
        <div>
            <div>
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

                <Button variant="primary" type="submit" onClick={Submit}>
                    Submit
                </Button>
            </div>

        </div>
    )
}

export default LoginPage
