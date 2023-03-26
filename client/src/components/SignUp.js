import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')


  
  const navigate = useNavigate();

 function handleSubmit(e){
    e.preventDefault()
    const user = {
        name,
        email,
        password
    }

    fetch('/users',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
            navigate(`/login`)
            })
        }else{
            res.json().then(json => (json.error))
        }
        })

  }
   



 
  return (
    <>
        <Container className="mt-3">
            <Row>
                <Col md={3}>
                    <Card className="shadow-lg">
                        <Card.Header className="p-3" style={{backgroundColor: '#ffc107'}}>
                            <h4>Register</h4>
                        </Card.Header>
                        <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        name="name"
                                        value = {name}
                                        onChange={(e) => setName(e.target.value)} 
                                        type="text" placeholder="Username"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder="Email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button onClick={handleSubmit} variant="warning" type="submit">Register</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
)
};
export default Signup;