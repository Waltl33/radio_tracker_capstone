import React, {useState} from "react";
import { Card, Button, Container, Divider} from "semantic-ui-react";

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
 
    
   
    
    
     
    <Card color = "black">
      <div>  
      <div className="ID" style={{color: 'black'}}><strong>ID:</strong><strong> <span style={{color: 'blue'}}>{radio.id}</span></strong></div> 
      <div className="assigned"style={{color: 'black'}}><strong> Assigned to:</strong><strong> <span style={{color: 'blue'}}> {radio.deputies.length === 0 ? "" : `${deputyFirstName} ${deputyLastName}`}</span></strong></div>  
      <div className="ID" style={{color: 'black'}}><strong>ID:</strong><strong> <span style={{color: 'red'}}>{radio.serial_number}</span></strong></div> 
      <span>
     
     <i className="model number" /> Model Number: {radio.model} </span>
     <Button compact size="tiny" color="blue"onClick={handleClick}> {radio.deputies.length !== 0 ? "Rented" : "Not Rented"}</Button>
      </div>
    </Card>
   
  );
}

export default RadioListItems;
