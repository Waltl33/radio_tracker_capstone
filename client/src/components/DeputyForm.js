import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'





function DeputyForm({handleNewDeputy}){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [identification_number, setIdentificationNumber] = useState("")
    const [resign, setResign] = useState("")
    const [location, setLocation] = useState("")
    const [errors, setErrors] = ([])
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })
let navigate = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let newDeputy = {
       first_name: first_name,
       last_name: last_name,
       identification_number: identification_number,
       resign: resign,
       location: location
       }
       fetch("/deputies", {
        method: "POST",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(newDeputy)
      })
      .then(res => {
        if (res.ok) {
          res.json().then(() => {
            navigate(`/deputies`);
          });
        } else {
          res.json().then(data => {
            setErrors(data.error);
          });
        }
      });
  }
     
        // .then(resp => resp.json())
        // .then(deputy => handleNewDeputy(deputy))
    
    



    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group >
          <Form.Input width = {4}
            placeholder='First Name'
            name='First Name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Input width = {4}
            placeholder='Last Name'
            name='Last Name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
           
       
            <Form.Input width = {4}
            placeholder='Location'
            name='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Button content='Submit' style={{ backgroundColor: 'blue', color: 'white' }} />
        </Form.Group>
      </Form>
    )
  }

export default DeputyForm