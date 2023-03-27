import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({radio, updateRadioButton}) {
  const [isRented, setRented] = useState(false);

  const handleClick = (e) => {
      console.log(radio.deputies.length)
  
    setRented(!isRented);
  }
  // map through radio serializer to get deputy names
  const deputyFirstName = radio.deputies.map(deputy =>(deputy.first_name))
  const deputyLastName = radio.deputies.map(deputy =>(deputy.last_name))
  const deputyId =  radio.deputies.map(deputy =>(deputy.id))

// function radioClicked(radio){
//   radio.id ===(deputyId)? console.log("rented"):console.log("not rented")
// }

// console.log(radio.deputies)
  return ( 
 
    <Card>
      <div>  
      <div className="id"> Issue ID: {radio.id}</div>   
      <div className="serial number"> Serial Number: {radio.serial_number}</div>
      <div className="assigned"> Assigned to: {radio.deputies.length === 0 ? "none" : `${deputyFirstName} ${deputyLastName}`} </div>  
      <span>
     
     <i className="model number" /> Model Number: {radio.model} </span>
     <button onClick={handleClick}> {radio.deputies.length !== 0 ? "Rented" : "Not Rented"}</button>
      </div>
    </Card>
  );
}

export default RadioListItems;
