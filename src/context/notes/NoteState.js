import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {

  const notesinitial=[
    {
      "_id": "615c42a5444b981e0558e5db",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T12:18:45.963Z",
      "__v": 0
    },
    {
      "_id": "615cb739a8d86c357bde7aef",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T20:36:09.987Z",
      "__v": 0
    },
    {
      "_id": "615cb9eac4af6b579e056dc7",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T20:47:38.843Z",
      "__v": 0
    },
    {
      "_id": "615cba29c4af6b579e056dcb",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T20:48:41.912Z",
      "__v": 0
    },
    {
      "_id": "615cba2bc4af6b579e056dcd",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T20:48:43.811Z",
      "__v": 0
    },
    {
      "_id": "615cba2ec4af6b579e056dcf",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-05T20:48:46.980Z",
      "__v": 0
    },
    {
      "_id": "615d4427-95a52204c37468b4",
      "user": "615591a99ad765ab8a054e29",
      "title": "My title updated",
      "description": "Please sleep well",
      "tag": "personal",
      "date": "2021-10-06T06:37:27.503Z",
      "__v": 0
    }
  ]
  const [notes,setNotes]=useState(notesinitial);

  //add a note
 const addNote =(title ,description,tag)=>{
   
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
 const deleteNote =()=>
 {
 
   
  
 }
  //edit a note
  const editNote =()=>{

  
  }

  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
