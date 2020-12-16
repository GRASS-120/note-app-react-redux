import React from 'react';
import { calculateColor } from '../../../../../utils/calculateColor';

let NoteModalMenu = ({note, toggleTextarea, toggleTextareaEditTitle, setActive, deleteNote, newText, editNoteText}) => {

    let deleteNotion = () => {
        setActive(false)
        deleteNote(note?.id)
    };

    let confirmChangeText = () => {
        editNoteText(note?.id, newText)
        setActive(false)
        toggleTextareaEditTitle()
    };
    
    return (
        <div className="note-modal__content__menu">

            <div className="note-modal__content__menu__item">
                <p style={calculateColor(note?.color)}>{note?.category}</p>
            </div>

            { toggleTextarea === true ?
                <>
                    <div className="note-modal__content__menu__item">
                        <i className="fas fa-check-circle change_text" onClick={confirmChangeText}></i>
                    </div>
                    <div className="note-modal__content__menu__item">
                                <i className="fas fa-times-circle close_text" onClick={toggleTextareaEditTitle}></i>
                    </div>
                </>  
                :<div className="note-modal__content__menu__item">
                    <i class="fas fa-pencil-alt edit_text" onClick={toggleTextareaEditTitle}></i>
                </div>
            }
                    
            <div className="note-modal__content__menu__item" id={note?.id} onClick={deleteNotion}>
                <i class="far fa-trash-alt delete_note"></i>
            </div>

        </div>
    )
};

export default NoteModalMenu;