import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updatenote } = props;

  return (
    <div className="">
      
        <div className="border-2 border-gray-200">
          <h5 className="text-gray-200 font-bold">{note.title}</h5>
          <p className="text-gray-400">{note.description}</p>
          <i
            className="fas fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("deleted successfully", "success");
            }}
          ></i>
          <i
            className="fas fa-edit mx-2"
            onClick={() => {
              updatenote(note);
            }}
          ></i>
        </div>
    </div>
  );
};

export default NoteItem;
