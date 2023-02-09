import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
const host = "https://i-notebook-server.onrender.com";

const Signup = (props) => {
    const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""})

    let navigate=useNavigate();
    
    const handleSignup = async (e) => {
      e.preventDefault();
      
      const {name,email,phone,work,password,cpassword}=user;

      const response=await fetch(`${host}/register`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },body:JSON.stringify({name,email,phone,work,password,cpassword})
      });

      const json = await response.json();
      console.log(json);

      if(password!==cpassword){
        props.showAlert("Password Not matched","danger");
      }
      else if(phone.length!==10){
          props.showAlert("Please Enter Valid Mobile Number","danger");
      }
      else if(json.success===true){
        localStorage.setItem('token', json.authtoken);
        navigate("/profile");
        props.showAlert("Account Created Successfully", "success")
      }
      else{
        props.showAlert("User With This Email Is Already Exist", "danger")
      }
    }

    const onChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div className="section-signup mb-1" style={{height:"610px"}}>
        <div className="signup">
    <div className="container mt-2">
      <h2 className="" style={{fontWeight:"bold"}}>Sign Up</h2>
      <form onSubmit={handleSignup}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
          <i className="fa-solid fa-user mx-3"></i>
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            style={{border:"2px solid black"}}
            onChange={onChange}
            required
          />
        </div>
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
          <label htmlFor="phone" className="form-label">
          <i className="fa-solid fa-phone-volume mx-3"></i>
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            aria-describedby="emailHelp"
            style={{border:"2px solid black"}}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="work" className="form-label">
          <i className="fa-sharp fa-solid fa-briefcase mx-3"></i>
            Your Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="work"
            name="work"
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
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
          <i className="fa-solid fa-key mx-3"></i>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            style={{border:"2px solid black"}}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          SignUp
        </button>
      </form>
      </div>
    </div>

      <div className="signup-image">
        <figure>
            <img src="https://e7.pngegg.com/pngimages/826/663/png-clipart-laptop-girl-thinking-woman-electronics-hand-thumbnail.png" alt="" />
        </figure>
        <Link to="/login" style={{textDecoration:"none",fontWeight:"bold"}}>I Am Already Registered</Link>
      
    </div>
    </div>
  )
}

export default Signup
