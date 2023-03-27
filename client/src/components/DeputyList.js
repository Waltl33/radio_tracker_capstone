import React from "react";
import DeputyListItem from "./DeputyListItem";
import { Card } from "semantic-ui-react";

function DeputyList({deputy, handleDeleteDeputy,updateDeputy }) {



 

  return (
<Card.Group centered items={6}>
{deputy.map(deputy => 
(   <DeputyListItem
  key = {deputy.id}
  deputy = {deputy}
  handleDeleteDeputy={handleDeleteDeputy}
  updateDeputy = {updateDeputy}
 />
))
}
</Card.Group>
    // <Card.Group itemsPerRow={6}>
    //   <h1>{deputyCards}</h1>
    // </Card.Group>
  );
}

export default DeputyList;