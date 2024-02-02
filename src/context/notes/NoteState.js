import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://webnotesbackend.onrender.com";
  const notesinitial = [];

  const [notes, setNotes] = useState(notesinitial);

  //get all notes
  const getallNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const jsonnn = await response.json();
    //  console.log(jsonnn)
    setNotes(jsonnn);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
         console.log(json)
    //  //console.log("deleting the node"+id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }),
    });
      const jsonn= await response.json();
    console.log(jsonn);

    let newnotess = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newnotess.length; index++) {
      const element = newnotess[index];
      if (element._id === id) {
        newnotess[index].title = title;

        newnotess[index].description = description;
        newnotess[index].tag = tag;

        break;
      }
    }

    setNotes(newnotess);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getallNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
