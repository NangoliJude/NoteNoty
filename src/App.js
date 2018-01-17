import React, { Component } from 'react';
import Main from './Main';
import './App.css';


class App extends Component{
    constructor(props){
        super(props);
        this.setCurrentNote = this.setCurrentNote.bind(this)
        this.state = {

            notes: { 
                "note-4": {
                     id: "note-4", 
                     title: "my Fancy Note",
                      body: "oh so fancy, from App" 
                    },
           
            "note-5": {
                id: "note-5",
                title: "my Fancy Note",
                body: "Another fancy, from app"
            },
          
        },
        currentNote: {
            id: null,
            title: "",
            body: " "
        }

        }
    }

    setCurrentNote(note){
        this.setState({ currentNote: note

        })
    }
    render(){

        return(
            <div className="App container wrap">
                <Main notes={this.state.notes}
                currentNote ={this.state.currentNote}
                setCurrentNote={this.setCurrentNote}/>
            </div>
        )
    }
};

export default App;