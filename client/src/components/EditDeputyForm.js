import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

function EditDeputyForm({updateDeputy,deputy} ){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [identification_number, setIdentificationNumber] = useState("")
    const [resign, setResign] = useState("")
    const [location, setLocation] = useState("")
   
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })
// const[formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     identification_number: '',
//     resign: '',
//     location: ''
// })
let user = {
  first_name,
  last_name,
  identification_number,
  resign,
  location
}


const {id} = useParams()
useEffect(() => {
  fetch(`/deputies/${id}`)
  .then(res => res.json())
  .then(user)
},[])


const handleSubmit = (e) => {
    e.preventDefault()
   
       fetch(`/deputies/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(user)
      })
        .then(resp => resp.json())
        .then(myDeputy => updateDeputy(myDeputy))
    
    }
console.log({id})

    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group>
   
          <Form.Input
            placeholder='First Name'
            name='First Name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Input
            placeholder='Last Name'
            name='Last Name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
            <Form.Input
            placeholder='Id Number'
            name='Id Number'
            value={identification_number}
            onChange={(e) => setIdentificationNumber(e.target.value)}
          />
            <Form.Input
            placeholder='Resign'
            name='Resign'
            value={resign}
            onChange={(e) => setResign(e.target.value)}
          />
            <Form.Input
            placeholder='Location'
            name='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }

export default EditDeputyForm