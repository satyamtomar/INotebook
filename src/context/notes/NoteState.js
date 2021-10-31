import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host="http://localhost:5000"
  const notesinitial=[]

  
  const [notes,setNotes]=useState(notesinitial);
  
  
  //get all notes
  const getallNotes =async ()=>{
   
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
        headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NTkxYTk5YWQ3NjVhYjhhMDU0ZTI5In0sImlhdCI6MTYzMzE2MzIxM30.a44bY6rbyp2cSWUhiTGOWl_MEliVD__NFuD8gfsoqPo"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        });
    const jsonnn =await response.json();
  //  console.log(jsonnn)
    setNotes(jsonnn);
   }
  
  //add a note
 const addNote =async (title ,description,tag)=>{
   
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST', 
      headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NTkxYTk5YWQ3NjVhYjhhMDU0ZTI5In0sImlhdCI6MTYzMzE2MzIxM30.a44bY6rbyp2cSWUhiTGOWl_MEliVD__NFuD8gfsoqPo"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({title,description,tag})
      });
  
  const note={
    "_id": "615cba2ec4af6b579e056dcf",
    "user": "615591a99ad765ab8a054e29",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2021-10-05T20:48:46.980Z",
    "__v": 0
  };
    setNotes(notes.concat(note));

 }
  //delete a note
 const deleteNote =async(id)=>
 {
   
  
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE', 
      headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NTkxYTk5YWQ3NjVhYjhhMDU0ZTI5In0sImlhdCI6MTYzMzE2MzIxM30.a44bY6rbyp2cSWUhiTGOWl_MEliVD__NFuD8gfsoqPo"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

      });
      const json=await response.json();
      console.log(json)
   //console.log("deleting the node"+id);
   const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
 }
  //edit a note
  const editNote =async (id,title ,description,tag)=>
  {
    const response = await fetch(`${host}/api/notes/updatenote/615d442795a52204c37468b4`, {
      method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NTkxYTk5YWQ3NjVhYjhhMDU0ZTI5In0sImlhdCI6MTYzMzE2MzIxM30.a44bY6rbyp2cSWUhiTGOWl_MEliVD__NFuD8gfsoqPo"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,description,tag})
        });
   //  const jsonn= await response.json(); 
    //console.log(jsonn); 
    for(let index=0;index<notes.length;index++)
    {
      const element=notes[index];
      if(element._id===id)
      {
        element.title=title;
        
        element.description=description;
        element.tag=tag;
      }
    }
   
  }

  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getallNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
