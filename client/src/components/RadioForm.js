import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

function RadioForm({handleNewRadio}){
    const [model, setModel] = useState("")
    const [serial_number, setSerialNumber] = useState("")
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let newRadio = {
        model: model,
        serial_number: serial_number, 
       }
       fetch("/radios", {
        method: "POST",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(newRadio)
      })
        .then(resp => resp.json())
        .then(myRadio => handleNewRadio(myRadio))
    
    }

//   render() {
//     const { name, email } = this.state

    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group>
          <Form.Input
            placeholder='Model'
            name='Model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <Form.Input
            placeholder='Serial Number'
            name='Serial Number'
            value={serial_number}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }

export default RadioForm