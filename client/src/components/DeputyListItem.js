// import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "semantic-ui-react";

function DeputyListItems({deputy, handleDeleteDeputy,updateDeputy}) {
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
      <div className="Identification Numberr"> Id: {identification_number}</div>
      <div className="resign"> Resign: {resign}</div>
      <div className="location"> Location: {location}</div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit Deputy</button>
      </div>
    </Card>
  );
}

export default DeputyListItems;
