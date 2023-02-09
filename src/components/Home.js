import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="cchome">
    <div className="chome">
      <div className="home">
          <h5 style={{color: "blue",fontWeight: "bold",fontFamily: "-moz-initial"}}>WELCOME</h5>
        <h1 style={{ fontFamily: "-moz-initial" }}>
          <b> To The I-notebook</b>
        </h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>
            <strong>About i-Notebook</strong>
          </h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">What is i-Notebook..?</h5>
          <p className="card-text">
            The inotebook is a online platform where you can write and store your daily notes. People often use
            inotebooks, where they can take notes.
          </p>
        </div>
      </div>

      <div className="aboutus-section">
      <Link to="/signup" className="freetrialbtn" style={{textDecoration:"none",fontWeight:"bold"}}>
        Start Your Free Trial
      </Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Home;
