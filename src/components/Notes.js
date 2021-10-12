import React,{useContext} from 'react'
import NoteItem from './NoteItem'
import NoteContext from  "../context/notes/NoteContext";
const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,setNotes}=context;
    
    return (
        <div className="row my-3">
                    <h1>Your Notes</h1>
                    {notes.map((note)=>{
                        return <NoteItem note={note}/>
                    })}
                    </div>
    )
}

export default Notes
