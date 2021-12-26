import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updatenote } = props;

  return (
    <div className="">
      
        <div className="border-2 border-gray-200 shadow-md shadow-cyan-500/100">
        <div className="flex flex-row justify-center px-2">
          <h5 className="text-gray-200 font-bold truncate">{note.title}</h5>
          </div>
          <div className="px-2">
          <p className="text-gray-400 truncate">{note.description}</p>
          </div>
          <div className="flex flex-row justify-center py-2 ">
          <i
            className="fas fa-trash-alt mx-2 text-gray-200"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("deleted successfully", "success");
            }}
          ></i>
          <i
            className="fas fa-edit mx-2 text-gray-200"
            onClick={() => {
              updatenote(note);
            }}
          ></i>
          </div>
        </div>
    </div>
  );
};

export default NoteItem;
