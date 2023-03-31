// import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Radio } from "semantic-ui-react";


function DeputyListItems({deputy, handleDeleteDeputy,updateDeputy, radios}) {
const navigate = useNavigate()
const {id, first_name, last_name, identification_number, resign, location} = deputy
// deletes a Deputy
  function handleDelete(){

    fetch(`/deputies/${id}`,{
      method:'DELETE',
    })
    .then((r) => {
      r.json()
      navigate("/deputies")

    })

    .then(() => {
      handleDeleteDeputy(deputy);
    });
}
// linked to handle edit button to navigate to the edit deputy form
const handleEdit = (e) => {
  e.preventDefault()
 console.log(id)
     fetch(`/deputies/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"
    },
      body: JSON.stringify(deputy)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(() => {
          navigate(`/deputies/${id}/edit`);
        });
      } else {
        res.json().then(json => {
          console.log(json.error);
        });
      }
    });
}
  const serialNumber =  deputy.radios.map(radio =>(radio.serial_number))

 
  return (

    <Card color = 'black'>
      <div>   
     <div className="Id" style={{color: 'black'}}><strong>Deputy Issue ID:</strong><strong> <span style={{color: 'blue'}}>{id}</span></strong></div>
    <div className="First Name" style={{color: 'black'}}><strong>First Name:</strong><strong> <span style={{color: 'blue'}}>{first_name}</span></strong></div>
    
    <div className="Last Name" style={{color: 'black'}}><strong>Last Name:</strong><strong> <span style={{color: 'blue'}}>{last_name}</span></strong></div>
    <div className="Location" style={{color: 'black'}}><strong>Location:</strong><strong> <span style={{color: 'blue'}}>{location}</span></strong></div>
    <div className="Serial Number" style={{color: 'black'}}><strong>Serial Number:</strong><strong> <span style={{color: 'red'}}>{serialNumber}</span></strong></div>
      
      
       
      <Button compact size = "mini" color="blue" onClick={handleDelete}>Return Radio</Button>
      <Button compact size = "mini"  color = "black" onClick={handleEdit}>Transfer Deputy</Button>
      </div>
    </Card>
  );
}

export default DeputyListItems;
