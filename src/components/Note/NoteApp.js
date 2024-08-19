

import React, { Component } from "react";
import './style.css';
import { TbTrashX } from "react-icons/tb";
import ColorBox from './ColorBox'
import Note from './Note'
import { FaCalendarPlus } from "react-icons/fa";


export default class NoteApp extends Component {
    constructor() {
        super()
        this.state = {
            colors: [
                '#a99afe',
                '#13007e',
                '#4ce5f6',
                '#09a1a3',
                '#3af502',
                '#3e800e',
                '#f7f779',
                '#989a0b',
                '#ff7b1d',
                '#ea6328',
                '#be00f3',
                '#581369',
                '#992675',
                '#ff03dd',
                '#ec0955',
            ],


            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }


        this.notetitleHandler = this.notetitleHandler.bind(this)
        this.inputStyleHandler = this.inputStyleHandler.bind(this)
        this.removeInputHandler = this.removeInputHandler.bind(this)
        this.noteAddHandler = this.noteAddHandler.bind(this)
        this.removeNote = this.removeNote.bind(this)
    }


    notetitleHandler(event) {
        this.setState({
            noteTitle: event.target.value
        })

    }
    inputStyleHandler(color) {
        this.setState({ inputColor: color })
    }
    removeInputHandler() {
        this.setState({ noteTitle: '', inputColor: '#fff' })

    }
    noteAddHandler() {
        let newNote = {
            id: this.state.notes.length + 1,
            noteTitle: this.state.noteTitle,
            color: this.state.inputColor
        }
        this.setState(prevState => {
            return {
                notes: [...prevState.notes, newNote],
                inputColor: "#fff",
                noteTitle: ''
            }
        })
    }
    removeNote(noteId) {
        // console.log(noteId)
        // let newNotes = [...this.state.notes]
        // let mainIndexNote = newNotes.findIndex(note => {
        //     return note.id === noteId
        // })
        // newNotes.splice(mainIndexNote, 1)
        // this.setState({
        //     notes: newNotes
        // })
        // /2
        let oldNote = [...this.state.notes]
        let newNote = oldNote.filter(note => {

            return note.id !== noteId
        }
        )
        this.setState({ notes: newNote })


    }
    render() {
        return (<>
            <div className="first-header">
                <p> App Note is ready for
                    creating your clorful notes....</p>
            </div>
            <div className="wrapper">
                <input maxLength={100} type="text " placeholder=" Something Here..." style={{ backgroundColor: this.state.inputColor }} value={this.state.noteTitle} onChange={this.notetitleHandler} />
                <div className="colors">
                    {this.state.colors.map(color => (

                        <ColorBox color={color} onColor={this.inputStyleHandler} key={color} />
                    )
                    )}
                </div>
                <div className="icons" style={{ width: '50%', top: '341px', height: '299px', position: 'absolute' }}>
                    <TbTrashX onClick={this.removeInputHandler} />
                    <FaCalendarPlus onClick={this.noteAddHandler} />
                </div>
            </div>
            {/* <div className="tasks-main" > */}
            {
                this.state.notes.map(note => (

                    <Note {...note} key={note.id} onRemove={this.removeNote} />
                ))
            }


            {/* </div> */}
        </>


        )
    }
}



