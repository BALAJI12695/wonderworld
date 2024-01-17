import React from 'react'
import logo from '../../assets/w-logo.jpg'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="Bootstrap" width="80" height="50" /> <b>Wonder World</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Fashion</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Kids</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Electronic </a></li>
            <li><a className="dropdown-item" href="#">Gaming </a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Everything</a></li>
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;