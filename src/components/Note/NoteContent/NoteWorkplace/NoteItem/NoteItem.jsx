import React from 'react'
import { calculateColor } from '../../../../../utils/calculateColor'
import './NoteItem.css'

let NoteItem = ({title, text, color}) => {

    // let [currentNote, setCurrentNote] = useState({})

    // let dropHandler = (e, note) => {
    //     e.preventDefault()
    //     setNotesListOnDrag(note, currentNote)
    //     e.target.style.background = "white"
    // }

    // let dragStartHandler = (e, note) => {
    //     console.log('drag', note)
    //     setCurrentNote(note)
    // }

    // let dragLeaveHandler = (e) => {
    //     e.target.style.background = "green"
    // }

    // let dragEndHandler = (e) => {
    //     e.target.style.background = "white"
    // }

    // let dragOverHandler = (e) => {
    //     e.preventDefault()
    //     e.target.style.background = "red"
    // }

    return (
        <div className="note__item" style={calculateColor(color)}>
            <p className="note__item_title">{title}</p>
            <p className="note__item_text">{text}</p>
        </div>
    )
}

export default NoteItem