import React from 'react'
import { Link as NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}} >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Crud Application</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
      </ul>
      <NavLink type='button' className="btn btn-outline-primary" to='/user/add' >Add User</NavLink>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar