import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    // <nav>
    //     <NavLink to='/'> Todo Liste </NavLink>
    //     <NavLink to='/addTodo'> Add Todo</NavLink>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ToDo-s App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="btn btn-outline-primary text-white me-2" aria-current="page">ToDo List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/addTodo' className="btn btn-outline-primary text-white me-2" aria-current="page">Add ToDo-s</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/filterTodo' className="btn btn-outline-primary text-white me-2" aria-current="page">Filter ToDo-s</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/countTodo' className="btn btn-outline-primary text-white me-2" aria-current="page">Count ToDo-s</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/About' className="btn btn-outline-primary text-white me-2" aria-current="page">About</NavLink>
        </li>
       </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar