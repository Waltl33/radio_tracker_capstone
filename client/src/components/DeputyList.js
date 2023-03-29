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
  
  );
}

export default DeputyList;