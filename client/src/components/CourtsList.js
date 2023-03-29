import React, {useEffect, useState} from "react";
import CourtsListItem from "./CourtsListItems";
import { Card } from "semantic-ui-react";

function CourtsList({}) {
const [courts, setCourts] = useState([])
    useEffect(()=> {
        fetch("http://127.0.0.1:3000/courts")
        .then(resp => resp.json())
        .then(setCourts)
      }, [])

  
   

  return (
<Card.Group itemsPerRow={6}>
{courts.map(deputy => 
(   <CourtsListItem
  key = {deputy.id}
  deputy = {deputy}

 />
))
}
</Card.Group>
  );
}

export default CourtsList;