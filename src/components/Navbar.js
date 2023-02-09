import React from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation();

    let navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login");
    props.showAlert("Account Logout Successfully","success");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontWeight:"bold"}}>
    <img src="logo.png" className="mx-2" alt="" width="35" height="29"/>I-NOTEBOOK
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      {!localStorage.getItem('token')?<form className="d-flex">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page" to="/" style={{fontSize:"20px",fontWeight:"bold"}}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/login"? "active" : ""}`} to="/login" style={{fontSize:"20px",fontWeight:"bold"}}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/signup"? "active" : ""}`} to="/signup" style={{fontSize:"20px",fontWeight:"bold"}}>Sign Up</Link>
        </li>
        </form>: 
        <>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/profile"? "active" : ""}`} to="/profile" style={{fontSize:"20px",fontWeight:"bold"}}>Profile</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"? "active" : ""}`} to="/contact" style={{fontSize:"20px",fontWeight:"bold"}} >Contact</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/about"? "active" : ""}`} to="/about" style={{fontSize:"20px",fontWeight:"bold"}}>Notes</Link>
      </li>
        <li className="nav-item">
          <Link className={`nav-link`} to="/" onClick={handleLogout} style={{fontSize:"20px"}}><i className="fa-solid fa-right-from-bracket"></i></Link>
        </li>
        </>}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
