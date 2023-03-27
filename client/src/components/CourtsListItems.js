// import { ErrorResponse } from "@remix-run/router";
import React from "react";

import { Card, Button, Radio } from "semantic-ui-react";
import { radioService } from "../radioService";

function CourtsListItems({deputy}) {

const {id, first_name, last_name, identification_number, resign, location} = deputy

const serialNumber =  deputy.radios.map(radio =>(radio.serial_number))
  return (

    <Card fluid color='red' header='Option 1'>
      <div>   
     
      <div className="First Name"> First Name: {first_name}</div>
      <div className="Last Name">  Last Name: {last_name}</div>
     
      <div className="location" > Location: {location}</div>
      <div className="serial number"> Serial Number: {serialNumber}</div>
 
      </div>
    </Card>
  );
}

export default CourtsListItems;
