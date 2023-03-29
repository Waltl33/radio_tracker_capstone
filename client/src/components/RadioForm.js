import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

function RadioForm({handleNewRadio}){
    const [model, setModel] = useState("")
    const [serial_number, setSerialNumber] = useState("")
    
let navigate = useNavigate()
// handleSubmit for creating Radios
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
     .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(myRadio=> {
      handleNewRadio(myRadio);
      navigate(`/`);
    })
    .catch(error => {
      console.error("Error updating deputy:", error);
      // Add appropriate error handling here, e.g. display a message to the user
    });
  }

    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group>
          <Form.Input
            placeholder='Model'
            name='Model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            style = {{color: "blue"}}
          />
          <Form.Input
            placeholder='Serial Number'
            name='Serial Number'
            value={serial_number}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
            <Form.Button content='Submit' style={{ backgroundColor: 'blue', color: 'white' }} />
        </Form.Group>
      </Form>
    )
  }

export default RadioForm