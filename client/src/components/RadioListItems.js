import React, {useState} from "react";
import { Card, Button} from "semantic-ui-react";
import { useNavigate } from "react-router-dom"
function RadioListItems({radio}) {
  const [isRented, setRented] = useState(false);
  const {id, model} = radio
  const navigate = useNavigate()

  const radioButton = radio.deputies.length !== 0 ? "Rented" : "Not Rented"
  const buttonColor = radio.deputies.length !== 0 ? "blue" : "black"

  const handleClick = (e) => {
      console.log(radio.deputies.length)
  
    setRented(!isRented);
  }
  // map through radio serializer to get deputy names
  const deputyFirstName = radio.deputies.map(deputy =>(deputy.first_name))
  const deputyLastName = radio.deputies.map(deputy =>(deputy.last_name))

  const handleRent = (e) => {
    e.preventDefault()
  //  console.log(id)
       fetch(`/radios/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(radio)
      })
      .then(res => {
        if (res.ok) {
          res.json().then(() => {
            navigate("/assign_radio/:id");
          });
        } else {
          res.json().then(json => {
            console.log(json.error);
          });
        }
      });
  }

  return ( 
 
    
   
    
    
     
    <Card color = "black">
      <div>  
      <div className="ID" style={{color: 'black'}}><strong>Radio Issue ID:</strong><strong> <span style={{color: 'blue'}}>{radio.id}</span></strong></div> 
      <div className="assigned"style={{color: 'black'}}><strong> Assigned to:</strong><strong> <span style={{color: 'blue'}}> {radio.deputies.length === 0 ? "" : `${deputyFirstName} ${deputyLastName}`}</span></strong></div>  
      <div className="Serial Number" style={{color: 'black'}}><strong>Serial Number:</strong><strong> <span style={{color: 'red'}}>{radio.serial_number}</span></strong></div> 
    
      <span className="model number"> Model Number: {radio.model} </span>
    <Button compact size="tiny" color={buttonColor} onClick={handleRent}>
    {radioButton}
    </Button>
      </div>
    </Card>
   
  );
}

export default RadioListItems;
