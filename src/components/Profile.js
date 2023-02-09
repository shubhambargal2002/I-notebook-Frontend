import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
const host = "https://i-notebook-server.onrender.com";

const Profile = () => {
    const [data,setData]=useState({_id:"",name:"",email:"",phone:"",work:""})
    
    const getData=async ()=>{
        // TODO: API call
        const response =await fetch(`${host}/getuser`, {
          method: 'GET', 
          headers: {
            'auth-token': localStorage.getItem("token")
          }, 
        });
  
        const json=await response.json()
        console.log(json);
        setData(json);
      }

      useEffect(() => {
        if(localStorage.getItem('token'))
        {
          getData();
        }
        else{
          console.log("Internal server error");
        }
        // eslint-disable-next-line
      }, []);

      
  return (
    <>
    <div className="ccprofile mt-5">
    <div>
        <h1><b>Your Profile</b></h1>
      </div>
    <div className="cprofile mt-4">
        <div className="profile  col-md-3 mx-5">
            <div className="prof-img" style={{cursor:"pointer"}}>
                <img src="profile.png " alt="" width="200px" height="200px"/>
            </div> 
            <Link className='' to='/about'>
              <button className="btn btn-primary mt-3 mb-2">
                Your Notes
              </button>
            </Link>       
        </div>
        <div className="profile-info col-md-9">
            <div className="left col-md-4">
               <div className="m-2"><b>User Id</b></div>
               <div className="m-2"><b>Name</b></div>
               <div className="m-2"><b>Email</b></div>
               <div className="m-2"><b>Phone</b></div>
               <div className="m-2"><b>Profession</b></div>
            </div>
            <div className="right col-md-4">
               <div className="m-2">{data._id}</div>
               <div className="m-2">{data.name}</div>
               <div className="m-2">{data.email}</div>
               <div className="m-2">{data.phone}</div>
               <div className="m-2">{data.work}</div>
            </div>
        </div> 
    </div>
    </div>
</>
  )
}

export default Profile
