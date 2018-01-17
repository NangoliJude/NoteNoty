import React from 'react';
import Note from './note';


const NoteList =(props)=>{
    const noteIds = Object.keys(props.notes);
    return(
        <div className="NotesList">
        <h3>Notes</h3>
        <ul id="notes">
        {noteIds.map(noteId=> <Note note={props.notes[noteId]} key={noteId}
        setCurrentNote={props.setCurrentNote}
        />
        )}
        </ul>
        </div>
    )
};

export default NoteList;