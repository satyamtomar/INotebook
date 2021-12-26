import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const clickhandler = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-row justify-center">
      <div className=" my-3 border-2 border-gray-200 shadow-md shadow-cyan-500/100 rounded-lg px-3 py-3 ">
      <div className="flex flex-row justify-center pb-4">
        <h1 className="text-4xl text-gray-200">Add a note</h1>
        </div>
        <div >
        <form>
          <div className="mb-3 flex flex-row justify-between">
              <div className=" mx-auto px-2">
            <label htmlFor="title" className=" text-gray-200 ">
              Title
            </label>
            </div>
            <div className=" pr-2">
            <input
              type="text"
              className=""
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
              value={note.title}
              minLength={5}
              required
            />
            </div>
          </div>
          <div className="mb-3 flex flex-row justify-between">
          <div className="mx-auto px-2">
            <label htmlFor="description" className=" text-gray-200 ">
              Description
            </label>
            </div>
            <div className="pr-2">
            <input
              type="text"
              className=""
              id="description"
              name="description"
              onChange={onChange}
              value={note.description}
              minLength={5}
              required
            />
            </div>
          </div>

          <div className="mb-3 flex flex-row justify-between">
          <div className="mx-auto px-2">
            <label htmlFor="tag" className=" text-gray-200">
              Tag
            </label>
            </div>
            <div className="pr-2">
            <input
              type="text"
              className=""
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              required
            />
            </div>
          </div>
          <div className="flex flex-row justify-center pt-4">
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-dark text-gray-200"
            onClick={clickhandler}
          >
            Add note
          </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
