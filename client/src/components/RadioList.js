import React from "react";
import RadioListItems from "./RadioListItems";
import { Card } from "semantic-ui-react";

function RadioList({radio,}) {

  const cards = radio.map((radio => (
    <RadioListItems
      key = {radio.id}
      radio = {radio}/>
  )))
  return (
    <Card.Group itemsPerRow={6}>
      <h1>{cards}</h1>
    </Card.Group>
    
  );
}

export default RadioList;