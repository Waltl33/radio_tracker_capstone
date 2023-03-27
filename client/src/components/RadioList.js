import React from "react";
import RadioListItems from "./RadioListItems";
import { Card } from "semantic-ui-react";

function RadioList({radio, updateRadioButton}) {

  // const cards = radio.map((radio => (
  //   <RadioListItems
  //     key = {radio.id}
  //     radio = {radio}/>
  // )))
  return (
    <Card.Group centered items={radio}>
    {radio.map(radio => 
    (   <RadioListItems
      key = {radio.id}
     radio = {radio}
      updateRadioButton = {updateRadioButton}
     />
    ))
    }
    </Card.Group>
  );
}

export default RadioList;