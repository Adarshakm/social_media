import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const HomeCompany = () => {

    const [state, setstate] = useState(0)


    return (
        <div>
            <input type="text" />  <button>Search</button>

            state: {state}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Jhon</Card.Title>
                    <p>skill : </p>
                    <p>experience : </p>
                    <Button variant="primary" onClick={() => setstate(state + 1)}  >Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default HomeCompany
