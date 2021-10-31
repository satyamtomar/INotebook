import React,{useContext,useEffect} from 'react'
import NoteItem from './NoteItem'
import NoteContext from  "../context/notes/NoteContext";
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,getallNotes}=context;
    useEffect(()=>{
        getallNotes()
    },[])
    return (
        <>
        <AddNote/>
        <div className="row my-3">
                    <h1>Your Notes</h1>
                    {notes.map((note)=>{
                        return <NoteItem key={note._id} note={note}/>
                    })}
                    </div></>
    )
}

export default Notes
