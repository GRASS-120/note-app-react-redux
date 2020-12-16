import React, {useState} from 'react';
import { calculateColor } from '../../../../utils/calculateColor';
import NoteModalContainer from './NoteModal/NoteModalContainer';
import './NoteWorkplace.css';

let NoteWorkplace = ({notes}) => {

    let [modalActive, setModalActive] = useState(false)
    let [currentNote, setCurrentNote] = useState(0)

    let openNoteModal = (e) => {
        setCurrentNote(e.target.id)
        setModalActive(true)
    };

    return (
        <>
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
            <NoteModalContainer active={modalActive} setActive={setModalActive} note={notes[currentNote]}/>
        </>    
    )
};

export default NoteWorkplace;