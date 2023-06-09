import React from 'react';
import { NavLink,Link, useNavigate} from "react-router-dom";
import "./styles.css"


export default function NavBar(){
  const navigate = useNavigate()
  const handleLogout = () => {
    fetch('/logout',{
      method: 'Delete'
    })
    .then(res => {
      if(res.ok){
        navigate('/login')
      }
    })
  }
  return (
  <nav className = "nav">
    <Link to="/" className="site-title">
        Radio Tracker
      </Link>
    <li>
      <NavLink to="/">Radio List</NavLink>
    </li>
    <li>
      <NavLink to="/radios/new">Create Radio</NavLink>
    </li>
    <li>
      <NavLink to="/deputies/new">Create Deputy</NavLink>
    </li>
    <li>
      <NavLink to="/deputies">Deputy List</NavLink>
    </li>
    <li>
      <NavLink to="/deputies/:id/edit">Edit Deputy</NavLink>
    </li>
    <button onClick={handleLogout}>Logout</button>
    </nav>

  );
}
