import React from 'react'
import Notes from './Notes'

const About = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default About
