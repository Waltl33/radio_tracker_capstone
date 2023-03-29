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
import CourtsList from  "./CourtsList"
import JailList from "./JailList";
import { Search } from "semantic-ui-react";
function RadioPage() {

const [radios, setRadios] = useState([])
const [deputies, setDeputies] = useState([])
const [rentedRadios, setRentedRadios] = useState({})
const [courts, setCourts] = useState({})
const [user, setUser] = useState(null)
const [searchRadios, setSearch] = useState("")
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
const updateSearchRadios = (searchInput) => {
  setSearch(searchInput)
}
const filteredRadios = radios.filter(radio => {
  if (radio === "") {
    //if query is empty
    return radio;
  } else if (radio.serial_number.toLowerCase().includes(searchRadios.toLowerCase())) {
    //returns filtered array
    return radio;
  
  }
});
// 

function updateRadioButton(updateRadioList){
  const filteredRentedRadios = rentedRadios.filter(radio => radio.id !== rentedRadios.id)
  
  setRadios(updateRadioList)
}
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
  {/* path to radios */}
  <Routes>
  
  <Route path="/" element={
      <RadioList 
      // radio = {radios} 
      radio = {filteredRadios}
      updateRadioButton = {updateRadioButton}
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
      // updatedDeputy = {updatedDeputy}
      // deputy={deputy}
      updateDeputy = {updateDeputy}
      />}/>

<Route path= "/deputies/:id/" element ={
      <RadioListItems
      // deleteDeputy = {deleteDeputy}
      />}/>
  {/* path to see all deputies */}
    <Route path= "/deputies" element ={
      <DeputyList
      deputy = {deputies}
      handleDeleteDeputy = {handleDeleteDeputy}
      updateDeputy = {updateDeputy}
      radios = {radios}
      />}/>
    {/* path to see all radios in the courts location */}
    <Route path= "/courts" element ={
      <CourtsList
      deputy = {deputies}
    
      radios = {radios}
      />}/>
    {/* path to see all radios in teh jails location */}
     <Route path= "/jails" element ={
      <JailList
      deputy = {deputies}
      // handleDeleteDeputy = {handleDeleteDeputy}
      // updateDeputy = {updateDeputy}
      radios = {radios}
      />}/>
      {/* path to login */}
  <Route path = "/login" element={
    <Login
   />} />
    {/* path to signup */}
<Route path = "/signup" element={
    <Signup
   />} />
   <Route path = "/search" element={
<Search
  updateSearchRadios= {updateSearchRadios}
    searchRadios = {searchRadios}
filteredRadios = {filteredRadios}

/>} />


     </Routes>
     </> 
  );
}

export default RadioPage;
