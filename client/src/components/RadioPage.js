import { useState, useEffect } from "react";
import RadioList from "./RadioList"
import RadioForm from "./RadioForm"
import DeputyList from "./DeputyList"
import DeputyForm from "./DeputyForm"
// import { Container } from "semantic-ui-react";
import {Routes, Route} from "react-router-dom"
import Login from "./Login"
import NavBar from "./NavBar";
import RentedRadioList from "./RentedRadioList";
import Signup from "./SignUp";
import EditDeputyForm from "./EditDeputyForm"
import RadioListItems from "./DeputyListItem";

function RadioPage() {

const [radios, setRadios] = useState([])
const [deputies, setDeputies] = useState([])
const [rentedRadios, setRentedRadios] = useState({})
const [user, setUser] = useState(null)
useEffect(()=> {
  fetch('/authorized')
  .then(res => {
    if(res.ok){
      res.json().then(user => setUser(user))
    }else{
      setUser(null)
    }
  })
}, [])



 useEffect(()=> {
    fetch("http://127.0.0.1:3000/radios")
    .then(resp => resp.json())
    .then(setRadios)
 }, [])

 useEffect(()=> {
  fetch("http://127.0.0.1:3000/deputies")
  .then(resp => resp.json())
  .then(setDeputies)
}, [])
useEffect(()=> {
  fetch("http://127.0.0.1:3000/rented_radios")
  .then(resp => resp.json())
  .then(setRentedRadios)
}, [])

 const handleNewRadio =(myRadio) => {
  setRadios([myRadio, ...radios])
 }
 const handleNewDeputy =(myDeputy) => {
  setDeputies([myDeputy, ...radios])
 }


 
function handleDeleteDeputy(deputytoDelete){
const updateDeputy = deputies.filter((deputy) => deputy.id !== deputytoDelete.id)
 setDeputies(updateDeputy)
}

const updateDeputy = (updatedDeputy) => setDeputies(current => {
  return current.map(deputy => {
   if(deputy.id === updatedDeputy.id){
     return updatedDeputy
   } else {
     return deputy
   }
  })
})

if(!user) return( 
<>
<Login setUser={setUser}/>
</>
)

 return (
  
    
   <>
   <NavBar/>
  <Routes>
  <Route path="/" element={
      <RadioList 
      radio = {radios} 
     /> }/>

    
     <Route path= "/radios/new" element={
      <RadioForm 
      handleNewRadio = {handleNewRadio}
      />}/>
    
      

    <Route path= "/deputies/new" element= {
      <DeputyForm
      handleNewDeputy = {handleNewDeputy}
      />}/>
 <Route path= "/deputies/:id/edit" element ={
      <EditDeputyForm
      // deputy = {deputies}
      // updatedDeputy = {updatedDeputy}
      // deputy={deputy}
      updateDeputy = {updateDeputy}
      />}/>

<Route path= "/deputies/:id/" element ={
      <RadioListItems
      // deleteDeputy = {deleteDeputy}
      />}/>

    <Route path= "/deputies" element ={
      <DeputyList
      deputy = {deputies}
      handleDeleteDeputy = {handleDeleteDeputy}
      updateDeputy = {updateDeputy}
      radios = {radios}
      />}/>

<Route path= "/rented_radios" element ={
      <RentedRadioList
      rentedRadios= {rentedRadios}
   
      />}/>
 
  <Route path = "/login" element={
    <Login
   />} />

<Route path = "/signup" element={
    <Signup
   />} />

     </Routes>
     </> 
  );
}

export default RadioPage;
