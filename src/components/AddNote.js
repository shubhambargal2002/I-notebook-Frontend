import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {
    const [note,setNote]=useState({title:"",description:"",tag:""})

    const {title,description}=note;

    const context=useContext(noteContext);
    const {addNote}=context;

    const handleClick=(e)=>{
        e.preventDefault();

        if(title.length<1 || description.length<1){
          props.showAlert("Please Filled Out Fields","danger")
        }
        else{
          addNote(note.title,note.description,note.tag);
          setNote({title:"",description:"",tag:""});
          props.showAlert("Note Added Successfully", "success");
        }
      }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
     }
  return (
    <>
    <div>
    <div className="container my-2">
    <h2><b>Add a Note</b></h2>
    <form className="my-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label" style={{fontWeight:"bold",fontSize:"20px"}}>
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          aria-describedby="emailHelp"
          style={{border:"2px solid black"}}
          value={note.title}
          onChange={onChange}
          required
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label" style={{fontWeight:"bold",fontSize:"20px"}}>
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          style={{border:"2px solid black"}}
          value={note.description}
          onChange={onChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label" style={{fontWeight:"bold",fontSize:"20px"}}>
        Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          style={{border:"2px solid black"}}
          value={note.tag}
          onChange={onChange}
        />
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Add Note
      </button>
    </form>
    </div>
  </div>
  </>
  )
}

export default Addnote
