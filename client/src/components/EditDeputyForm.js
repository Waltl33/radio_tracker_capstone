import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { useParams, useNavigate } from 'react-router-dom'

function EditDeputyForm({updateDeputy, deputy}){

    const [first_name, setFirstName] = useState(deputy.first_name || "")
    const [last_name, setLastName] = useState("")
    const [identification_number, setIdentificationNumber] = useState("")
    const [resign, setResign] = useState("")
    const [location, setLocation] = useState()
    const [errors, setErrors] = useState([])
  let navigate = useNavigate()


let user = {
    first_name: deputy.first_name,
    last_name: deputy.last_name,
    identification_number: deputy.identification_number,
    resign,
    location
}

let {id} = useParams()
useEffect(() => {
    fetch(`/deputies/${id}`)
    .then(res => res.json())
    .then(user)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(`/deputies/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(myDeputy => {
      updateDeputy(myDeputy);
      navigate(`/deputies`);
    })
    .catch(error => {
      console.error("Error updating deputy:", error);
      // Add appropriate error handling here, e.g. display a message to the user
    });
  }
 
// const handleSubmit = (e) => {
//     e.preventDefault()
   
//        fetch(`/deputies/${id}`, {
//         method: "PATCH",
//         headers: {"Content-Type": "application/json"
//       },
//         body: JSON.stringify(user)
//       })
//         .then(resp => resp.json())
//         .then(myDeputy => updateDeputy(myDeputy))
    
//     }

// console.log(id)
<h1>(errors)</h1>
    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group>
   
         <Form.Input
            placeholder='Location'
            name='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Button content='Submit' style={{ backgroundColor: 'blue', color: 'white' }}/>
        </Form.Group>
      </Form>
    )
  }

export default EditDeputyForm