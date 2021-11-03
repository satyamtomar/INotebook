import React, { useContext, useState,useEffect,useRef } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getallNotes,editNote } = context;
  useEffect(() => {
    getallNotes();
    // eslint-disable-next-line
  }, []);

  const ref=useRef(null)
const refclose=useRef(null)
  
  const [note ,setNote]=useState({ id:"",etitle:"",edescription:"",etag:""})
  const updatenote = (curnote) => {
    ref.current.click()
    setNote({id:curnote._id,etitle:curnote.title,edescription:curnote.description,etag:curnote.tag})
  }; 
  const clickhandler = (e)=>{
      console.log('updating note')
      editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
    props.showAlert("updated successfully","success");
}
  const onChange=(e)=>
  {
        setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
      <AddNote  showAlert={props.showAlert} />

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
              
              minLength={5} required
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
              minLength={5} required
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
               required
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
              <button disabled={note.etitle.length<5||note.edescription.length<5} onClick={clickhandler} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container">
        {notes.length === 0 &&'No notes to display'}
        </div>
         { notes.map((note) => {
            return (
              <NoteItem key={note._id} updatenote={updatenote} note={note} showAlert={props.showAlert} />
            );
          })}
          
      </div>
    </>
  );
};

export default Notes;
