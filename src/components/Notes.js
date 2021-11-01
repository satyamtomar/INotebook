import React, { useContext, useState,useEffect,useRef } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import { EmojiFoodBeverageTwoTone } from "@material-ui/icons";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getallNotes,editNote } = context;
  useEffect(() => {
    getallNotes();
    // eslint-disable-next-line
  }, []);

  const ref=useRef(null)
const refclose=useRef(null)
  
  const [note ,setNote]=useState({ id:"",etitle:"",edescription:"",etag:"default"})
  const updatenote = (curnote) => {
    ref.current.click()
    setNote({id:curnote._id,etitle:curnote.title,edescription:curnote.description,etag:curnote.tag})
}; 
  const clickhandler = (e)=>{
      console.log('updating note')
      editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
}
  const onChange=(e)=>
  {
        setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            
            
            <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              aria-describedby="emailHelp"
              name="etitle"
              value={note.etitle}
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label" >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              onChange={onChange}
              value={note.edescription}

            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              onChange={onChange}
              value={note.etag}
            />
          </div>

        </form>

            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={clickhandler} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length > 0 &&
          notes.map((note) => {
            return (
              <NoteItem key={note._id} updatenote={updatenote} note={note} />
            );
          })}
          
      </div>
    </>
  );
};

export default Notes;
