import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'





function AssignRadioForm({}){
    const [date_issued, setDateIssued] = useState("")
    const [radio_id, setRadioID] = useState("")
    const [deputy_id, setDeputyID] = useState("")
    const [errors, setErrors] = useState("")
  
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })
let navigate = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let assignRadio = {
     date_issued,
     radio_id,
     deputy_id
       }
       fetch("/rented_radios", {
        method: "POST",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(assignRadio)
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
     
    
    
    



    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group >
          <Form.Input width = {4}
            placeholder='Date Issued'
            name='Date Issued'
            value={date_issued}
            onChange={(e) => setDateIssued(e.target.value)}
          />
          <Form.Input width = {4}
            placeholder='Radio Issued ID'
            name='Radio Issue ID'
            value={radio_id}
            onChange={(e) => setRadioID(e.target.value)}
          />
           
       
         <Form.Input width = {4}
            placeholder='Deputy Issue ID'
            name='Deputy Issue ID'
            value={deputy_id}
            onChange={(e) => setDeputyID(e.target.value)}
          />
          <Form.Button content='Submit' style={{ backgroundColor: 'blue', color: 'white' }} />
        </Form.Group>
      </Form>
    )
  }

export default AssignRadioForm