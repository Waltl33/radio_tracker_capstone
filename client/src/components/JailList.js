import React, {useEffect, useState} from "react";
import JailListItems from "./JailListItems";
import { Card } from "semantic-ui-react";

function JailList({deputy}) {
const [jails, setJails] = useState([])
    useEffect(()=> {
        fetch("http://127.0.0.1:3000/jails")
        .then(resp => resp.json())
        .then(setJails)
      }, [])

  
    

  return (
<Card.Group itemsPerRow={6}>
{jails.map(deputy => 
(   <JailListItems
  key = {deputy.id}
  deputy = {deputy}

 />
))
}
</Card.Group>
    // <Card.Group itemsPerRow={6}>
    //   <h1>{deputyCards}</h1>
    // </Card.Group>
  );
}

export default JailList;