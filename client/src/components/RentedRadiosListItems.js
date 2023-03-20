import React from "react";
import { Card } from "semantic-ui-react";

function RentedRadiosListItems({radios}) {
  
  return (
    <Card>
      <div>     
      <div className="First Name"> First Name: {radios.first_name}</div>
      <div className="Last Name">  Last Name: {radios.last_name}</div>
      <div className="Identification Numberr"> Id: {radios.identification_number}</div>
      <div className="resign"> Resign: {radios.resign}</div>
      <div className="location"> Location: {radios.location}</div>
      
      </div>
    </Card>
  );
}

export default RentedRadiosListItems;