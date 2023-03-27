import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({radio, updateRadioButton}) {
  const [isRented, setRented] = useState(false);

  const handleClick = (e) => {
      
  
    setRented(!isRented);
  }


  const deputyFirstName = radio.deputies.map(deputy =>(deputy.first_name))
  const deputyLastName = radio.deputies.map(deputy =>(deputy.last_name))

  return ( 
 
    <Card>
      <div>  
      <div className="id"> Issue ID: {radio.id}</div>   
      <div className="serial number"> Serial Number: {radio.serial_number}</div>
      <div className="assigned"> Assigned to: {deputyFirstName} {deputyLastName}</div>  
      <span>
     
     <i className="model number" /> Model Number: {radio.model} </span>
     <button onClick={handleClick}> {isRented ? "Rented" : "Not Rented"}</button>
      </div>
    </Card>
  );
}

export default RadioListItems;
