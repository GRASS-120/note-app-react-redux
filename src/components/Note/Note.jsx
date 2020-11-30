import React, {useState} from 'react';
import { calculateColor } from '../../utils/calculateColor';
import './Note.css';
import NoteMenuContainer from './NoteContent/NoteMenu/NoteMenuContainer';
import NoteModal from './NoteContent/NoteWorkplace/NoteItem/NoteModal';

let Note = ({notes}) => {

    let [modalActive, setModalActive] = useState(false)
    let [currentNote, setCurrentNote] = useState(0)

    let openNoteModal = (e) => {
        setCurrentNote(e.target.id)
        setModalActive(true)
    }

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
                    { notes.map((note, index) =>
                        <div key={index} id={index} className="note__item" style={calculateColor(note.color)} onClick={openNoteModal}>
                            <div onClick={(e) => e.stopPropagation()}>
                                <p className="note__item_title" onClick={() => {}}>{note.title}</p>
                                <p className="note__item_text" onClick={() => {}}>{note.text}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
                <NoteModal active={modalActive} setActive={setModalActive} note={notes[currentNote]}/>
            </div>
        </div>
    )
}

export default Note