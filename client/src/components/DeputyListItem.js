// import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Radio } from "semantic-ui-react";
import { radioService } from "../radioService";

function DeputyListItems({deputy, handleDeleteDeputy,updateDeputy, radios}) {
const navigate = useNavigate()
const {id, first_name, last_name, identification_number, resign, location} = deputy

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

const handleEdit = (e) => {
  e.preventDefault()
 
     fetch(`/deputies/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"
    },
      body: JSON.stringify(deputy)
    })
      .then(resp => resp.json())
      .then(myDeputy => updateDeputy(myDeputy))
  
  }
  
  return (

    <Card>
      <div>     
      <div className="First Name"> First Name: {first_name}</div>
      <div className="Last Name">  Last Name: {last_name}</div>
      <div className="Identification Number"> Id: {identification_number}</div>
      <div className="resign"> Resign: {resign}</div>
      <div className="location"> Location: {location}</div>
      <div className="location"> Serial Number:</div>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEdit}>Edit Deputy</Button>
      </div>
    </Card>
  );
}

export default DeputyListItems;
