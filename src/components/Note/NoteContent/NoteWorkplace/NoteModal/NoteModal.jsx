import React, {useState, useEffect} from 'react';
import { calculateColor } from '../../../../../utils/calculateColor';
import './NoteModal.css';
import NoteModalMenu from './NoteModalMenu';
import NoteModalTitle from './NoteModalTitle';

let NoteModal = ({active, setActive, note, deleteNote, editNoteTitle, editNoteText}) => {
    
    let [newTitle, setNewTitle] = useState(note?.title)
    let [toggleTextarea, setToggleTextarea] = useState(false)
    let [newText, setNewText] = useState(note?.text)

    useEffect(() => {
        setNewTitle(note?.title)
    }, [note?.title]);

    let toggleTextareaEditTitle = () => {
        setToggleTextarea(!toggleTextarea)
    };

    let changeText = (e) => {
        setNewText(e.currentTarget.value)
    } ;

    return (
        <div
            className={active === true ? "note-modal active" : "note-modal"}
            onClick={() => setActive(false)}
            >
            <div
                className={active === true ? "note-modal__content active" : "note-modal__content"}
                style={calculateColor(note?.color)}
                onClick={e => e.stopPropagation()}
                >
                <NoteModalTitle
                    note={note}
                    newTitle={newTitle}
                    setNewTitle={setNewTitle}
                    editNoteTitle={editNoteTitle}
                    setActive={setActive}
                />

                    {toggleTextarea === true ?
                        <div>
                            <textarea className="note-modal__content__textarea" value={newText} autoFocus={true} onChange={changeText}></textarea>
                        </div>
                            
                        : <p className="note-modal__content__text">{note?.text}</p>
                    }
                
                <NoteModalMenu
                    note={note}
                    toggleTextarea={toggleTextarea}
                    toggleTextareaEditTitle={toggleTextareaEditTitle}
                    setActive={setActive}
                    deleteNote={deleteNote}
                    newText={newText}
                    setNewText={setNewText}
                    editNoteText={editNoteText}
                />
            </div>
        </div>
    )
};

export default NoteModal;