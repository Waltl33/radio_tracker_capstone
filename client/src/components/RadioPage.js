import { useState, useEffect } from "react";
import RadioList from "./RadioList"
import RadioForm from "./RadioForm"
import DeputyList from "./DeputyList"
import DeputyForm from "./DeputyForm"
// import { Container } from "semantic-ui-react";
import {Routes, Route} from "react-router-dom"
import Login from "./Login"
import NavBar from "./NavBar";
import Signup from "./SignUp";
import EditDeputyForm from "./EditDeputyForm"
import RadioListItems from "./DeputyListItem";
import CourtsList from  "./CourtsList"
import JailList from "./JailList";
import AssignRadioForm from "./AssignRadioForm";

function RadioPage() {

const [radios, setRadios] = useState([])
const [deputies, setDeputies] = useState([])
const [rentedRadios, setRentedRadios] = useState({})
const [user, setUser] = useState(null)

// authorizes users
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
   fetch("http://127.0.0.1:3000/rented_radios")
   .then(resp => resp.json())
   .then(setRentedRadios)
 }, [])
 
 useEffect(()=> {
  fetch("http://127.0.0.1:3000/deputies")
  .then(resp => resp.json())
  .then(setDeputies)
}, [])

// function to update new radios on create
 const handleNewRadio =(myRadio) => {
  setRadios([myRadio, ...radios])
 }
// function to update new deputies on create
 const handleNewDeputy =(myDeputy) => {
  setDeputies([myDeputy, ...radios])
 }


// function to delete deputies
function handleDeleteDeputy(deputytoDelete){
const updateDeputy = deputies.filter((deputy) => deputy.id !== deputytoDelete.id)
 setDeputies(updateDeputy)
}

// 


// function to edit deputies on Post
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
  
  {/* path to radios */}
   <Route path="/" element={
      <RadioList 
      radio = {radios}  
    /> }/>

    {/* path to create radios */}
   <Route path= "/radios/new" element={
      <RadioForm 
      handleNewRadio = {handleNewRadio}
    />}/>
    
      
      {/* path to create deputies */}
    <Route path= "/deputies/new" element= {
      <DeputyForm
      handleNewDeputy = {handleNewDeputy}
      />}/>

      {/* path edit deputies */}
    <Route path= "/deputies/:id/edit" element ={
       <EditDeputyForm
       deputy = {deputies}
       updateDeputy = {updateDeputy}
      />}/>

    <Route path= "/deputies/:id/" element ={
      <RadioListItems
      />}/>

    {/* path to see all deputies */}
    <Route path= "/deputies" element ={
      <DeputyList
      deputy = {deputies}
      handleDeleteDeputy = {handleDeleteDeputy}
      />}/>

    {/* path to see all radios in the courts location */}
    <Route path= "/courts" element ={
      <CourtsList  
      />}/>

    {/* path to see all radios in teh jails location */}
    <Route path= "/jails" element ={
      <JailList
      />}/>

    <Route path= "/assign_radio" element ={
      <AssignRadioForm
      />}/>

    {/* path to login */}
    <Route path = "/login" element={
      <Login
     />} />

    {/* path to signup */}
    <Route path = "/signup" element={
      <Signup
      />} />

     </Routes>
     </> 
  );
}

export default RadioPage;
