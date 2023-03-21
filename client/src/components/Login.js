import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  
function handleSubmit (e){
    e.preventDefault();
    const user = {
      email,
      password
    }
  
   
      fetch('/login',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
              navigate(`/`)
              })
          }else{
              res.json().then(json => (json.error))
          }
          })
  
    }
     
  
  



  return (

    <form onSubmit={handleSubmit}>
    {/* <!-- Email input --> */}
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
{/*   
    <!-- Password input --> */}
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control"value={password} onChange={(e) => setPassword(e.target.value)} />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
 
    {/* <!-- Submit button --> */}
    <button type="button" onClick={handleSubmit} class="btn btn-primary btn-block mb-4">Sign in</button>
{/*   
    <!-- Register buttons --> */}
  {/* //   <div class="text-center">
  //     <p>Not a member? <a href="#!">Register</a></p>
  //     <p>or sign up with:</p>
  //     <button type="button" class="btn btn-link btn-floating mx-1">
  //       <i class="fab fa-facebook-f"></i>
  //     </button>
  
  //     <button type="button" class="btn btn-link btn-floating mx-1">
  //       <i class="fab fa-google"></i>
  //     </button>
  
  //     <button type="button" class="btn btn-link btn-floating mx-1">
  //       <i class="fab fa-twitter"></i>
  //     </button>
  
  //     <button type="button" class="btn btn-link btn-floating mx-1">
  //       <i class="fab fa-github"></i>
  //     </button>
  //   </div>
  // </form> */}
  </form>)
}
export default Login;