import React,{useContext, useState} from 'react'
import NoteContext from  "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote}=context;
    const [note ,setNote]=useState({ title:"",description:"",tag:"default"})
    const clickhandler = (e)=>{
        e.preventDefault(); 
addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>
    {
          setNote({...note,[e.target.name]:e.target.value})
    }
    return (
       
        <div>
            <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}

            />
          </div>
          
          <button type="submit" className="btn btn-dark" onClick={clickhandler}>
            Submit
          </button>
        </form>
      </div>

        </div>
    )
}

export default AddNote
