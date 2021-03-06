import React from 'react';
import SideBar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Main=(props)=>{
    return(
     <div className="Main">
         <SideBar/>
         <NoteList notes={props.notes}
          setCurrentNote={props.setCurrentNote}
         />
         <NoteForm currentNote={props.currentNote}
         />
    </div>
    )
};

export default Main;