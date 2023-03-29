import React, {useState} from "react";
import { Card, Button} from "semantic-ui-react";

function RadioListItems({radio}) {
  const [isRented, setRented] = useState(false);

  const handleClick = (e) => {
      console.log(radio.deputies.length)
  
    setRented(!isRented);
  }
  // map through radio serializer to get deputy names
  const deputyFirstName = radio.deputies.map(deputy =>(deputy.first_name))
  const deputyLastName = radio.deputies.map(deputy =>(deputy.last_name))

 

  return ( 
 
    
   
    
    
     
    <Card color = "black">
      <div>  
      <div className="ID" style={{color: 'black'}}><strong>ID:</strong><strong> <span style={{color: 'blue'}}>{radio.id}</span></strong></div> 
      <div className="assigned"style={{color: 'black'}}><strong> Assigned to:</strong><strong> <span style={{color: 'blue'}}> {radio.deputies.length === 0 ? "" : `${deputyFirstName} ${deputyLastName}`}</span></strong></div>  
      <div className="Serial Number" style={{color: 'black'}}><strong>Serial Number:</strong><strong> <span style={{color: 'red'}}>{radio.serial_number}</span></strong></div> 
    
      <span className="model number"> Model Number: {radio.model} </span>
    <Button compact size="tiny" color={radio.deputies.length !== 0 ? "blue" : "black"} onClick={handleClick}>
    {radio.deputies.length !== 0 ? "Rented" : "Not Rented"}
    </Button>
      </div>
    </Card>
   
  );
}

export default RadioListItems;
