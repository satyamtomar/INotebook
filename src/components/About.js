import React from 'react'
import {useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';
const About = () => {
    const a=useContext(NoteContext);
    return (
        <div>
            <h1>About{a.name}</h1>
        </div>
    )
}

export default About
