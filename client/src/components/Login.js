import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  
function handleSubmit (e){
    e.preventDefault();
    const user = {
      email,
      password
    }
  
   
      fetch('/login',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
              navigate(`/`)
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
                            <h4>Login</h4>
                        </Card.Header>
                        <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                            <Form>
                           
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
                                    <Button onClick={handleSubmit} variant="warning" type="submit">Login</Button>
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
export default Login;