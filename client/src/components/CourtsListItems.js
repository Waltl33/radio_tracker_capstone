// import { ErrorResponse } from "@remix-run/router";
import React from "react";

import { Card, Button, Radio } from "semantic-ui-react";
import { radioService } from "../radioService";

function CourtsListItems({deputy}) {

const {id, first_name, last_name, identification_number, resign, location} = deputy

const serialNumber =  deputy.radios.map(radio =>(radio.serial_number))
  return (

    <Card color='black'>
      <div>   
     
      <div className="First Name" style={{color: 'black'}}><strong>First Name:</strong><strong> <span style={{color: 'blue'}}>{first_name}</span></strong></div>
    
       <div className="Last Name" style={{color: 'black'}}><strong>Last Name:</strong><strong> <span style={{color: 'blue'}}>{last_name}</span></strong></div>
       <div className="Location" style={{color: 'black'}}><strong>Location:</strong><strong> <span style={{color: 'blue'}}>{location}</span></strong></div>
       <div className="Serial Number" style={{color: 'black'}}><strong>Serial Number:</strong><strong> <span style={{color: 'red'}}>{serialNumber}</span></strong></div>
      </div>
 
    
    </Card>
  );
}

export default CourtsListItems;
