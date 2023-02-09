import React, { useState } from 'react'
import NoteContext from "./noteContext";
const host = "https://i-notebook-server.onrender.com";

const NoteState = (props) => {
    const notesInitial=[]
    const [notes,setNotes]=useState(notesInitial)
    // get all notes
    const getNotes=async ()=>{
      // TODO: API call
      const response =await fetch(`${host}/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'auth-token': localStorage.getItem("token")
        }, 
      });

      const json=await response.json()
      console.log(json);
      setNotes(json)
    }



    // add a note
    const addNote=async (title,description,tag)=>{
        // TODO: API call
        const response =await fetch(`${host}/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem("token")
          },body:JSON.stringify({title,description,tag} )
        });
        const note=await response.json()
        if(title.length<1 || description.length<1){
             console.log({error:"Please filled all fields"})
        }
        else{
          setNotes(notes.concat(note))
        }
      }

      //delete a note
      const deleteNote=async(id)=>{
        // TODO: API call
        const response =await fetch(`${host}/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem("token")
          }, 
        });
        const json=await response.json()
        console.log(json);

        // logic to delete note
        const newNotes=notes.filter((note)=>{
          return note._id!==id
        })
        setNotes(newNotes)
    }

    //edit a note
    const editNote=async (id,title,description,tag)=>{
        // TODO: API call
        const response =await fetch(`${host}/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem("token")
          }, body:JSON.stringify({title,description,tag} )
        }); 
        const json=await response.json()
        console.log(json);

        const newNotes=JSON.parse(JSON.stringify(notes))

      // logic to edit note
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
            break;
          }
        }
        setNotes(newNotes);
    }
  return (
    <div>
      <NoteContext.Provider value={{notes,addNote,getNotes,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    </div>
  )
}

export default NoteState
