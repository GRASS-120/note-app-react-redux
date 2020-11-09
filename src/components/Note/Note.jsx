import React from 'react';
import { calculateColor } from '../../utils/calculateColor';
import './Note.css';
import NoteMenuContainer from './NoteContent/NoteMenu/NoteMenuContainer';
import NoteItem from './NoteContent/NoteWorkplace/NoteItem/NoteItem';

let Note = ({notes}) => {

    return(
        <div className="note">
            <div className="note__title">
                <p>Note <i className="far fa-sticky-note"></i></p>
            </div>
            <div className="note__content">
                <NoteMenuContainer/>
                <div className="note__sort">

                </div>
                <div className="note__workplace">
                    { notes.map(note => <NoteItem key={note.id} title={note.title} text={note.text} color={note.color}/>) }
                </div>
            </div>
        </div>
    )
}

export default Note