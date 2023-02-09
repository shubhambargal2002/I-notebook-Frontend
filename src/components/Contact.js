import React,{useState, useEffect} from "react";
const host = "https://i-notebook-server.onrender.com";

const Contact = (props) => {
  const [data,setData]=useState({name:"",email:"",phone:"",message:""})
    
    const getData=async ()=>{
        // TODO: API call
        const response =await fetch(`${host}/getuser`, {
          method: 'GET', 
          headers: {
            'auth-token': localStorage.getItem("token")
          }, 
        });
  
        const json=await response.json()
        console.log({...data,name:json.name,email:json.email,phone:json.phone});
        setData({...data,name:json.name,email:json.email,phone:json.phone});
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

      const handleSend = async (e) => {
        e.preventDefault();
        
        const {name,email,phone,message}=data;
  
        const response=await fetch(`${host}/addmessage`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'auth-token': localStorage.getItem("token")
        },body:JSON.stringify({name,email,phone,message})
        });
  
        const json = await response.json();

        if(!message){
          props.showAlert("Please Enter A Message", "danger");
        }
        else{
          props.showAlert("Message send Successfully", "success");
          setData({...data,message:""});
        }
        console.log(json);
      }

  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
 }
  return (
    <div className="container">
      <div className="contact-info">
        <div className="box">
          <h5>
            <i className="fa-solid fa-phone-volume mx-3"></i>Phone
          </h5>
          <p>+91 8080584307</p>
        </div>
        <div className="box">
          <h5>
            <i className="fa-solid fa-envelope mx-3"></i>Email
          </h5>
          <p>shubhambargal2002@gmail.com</p>
        </div>
        <div className="box">
          <h5>
            <i className="fa-solid fa-location-dot mx-3"></i>Address
          </h5>
          <p>Pune, Maharashtra</p>
        </div>
      </div>
      <div className="ccontact mt-4">
      <form className="form contact">
      <h1 className="mt-1"><b> Get In Touch</b></h1>
        <div className="contact-form">
          <div className="contact-form-box mb-3" style={{width:"235px"}}>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Your Name"
              style={{ border: "2px solid black" }}
              required
            />
          </div>
          <div className="contact-form-box mb-3" style={{width:"235px"}}>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              aria-describedby="emailHelp"
              placeholder="Email address"
              onChange={onChange}
              style={{ border: "2px solid black" }}
              required
            />
          </div>
          <div className="contact-form-box mb-3" style={{width:"235px"}}>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={data.phone}
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Mobile Number"
              style={{ border: "2px solid black" }}
              required
            />
          </div>
        </div>
        <div className="textarea">
          <textarea
            className="Form-control"
            id="message"
            name="message"
            value={data.message}
            placeholder="Enter Message Here"
            onChange={onChange}
            cols="94"
            rows="9"
            style={{border:"2px solid black",borderRadius:"5px"}}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-1 mb-2" onClick={handleSend}>
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
