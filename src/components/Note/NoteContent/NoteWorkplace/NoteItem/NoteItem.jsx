import React from 'react'
import { calculateColor } from '../../../../../utils/calculateColor'
import './NoteItem.css'

let NoteItem = ({title, text, color}) => {

    return (
        <div className="note__item" style={calculateColor(color)}>
            <p className="note__item_title">{title}</p>
            <p className="note__item_text">{text}</p>
        </div>
    )
}

export default NoteItem