import React, {useState}from 'react'
import {Link, useNavigate} from 'react-router-dom';
const host = "https://i-notebook-server.onrender.com";

const Login = (props) => {
  const [user,setUser]=useState({email:"",password:""})

  let navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const {email,password}=user;

    const response = await fetch(`${host}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },body:JSON.stringify({email,password})
    });
    const json = await response.json();
    console.log(json);

    if(json.success===true){
      localStorage.setItem('token', json.authtoken);
      navigate("/profile");
      props.showAlert("Account Login Successfully", "success")
    }
    else{
      props.showAlert("Invalid Credentials", "danger")
    }
  }

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
     }

  return (
    <section className="section-signup" style={{margin:"30px",padding:"70px 50px"}}>

    <div className="signup-image">
        <figure>
            <img src="https://e7.pngegg.com/pngimages/826/663/png-clipart-laptop-girl-thinking-woman-electronics-hand-thumbnail.png" alt=""/>
        </figure>
        <Link to="/signup" style={{textDecoration:"none",fontWeight:"bold"}}>Create An Account</Link>
    </div>
        <div className="signup">
    <div className="container mt-2">
      <h2 className="my-3" style={{fontWeight:"bold"}}>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          <i className="fa-solid fa-envelope mx-3"></i>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            style={{border:"2px solid black"}}
            onChange={onChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          <i className="fa-solid fa-key mx-3"></i>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            style={{border:"2px solid black"}}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
    </div>
    </section>
  )
}

export default Login
