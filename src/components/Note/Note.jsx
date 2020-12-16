import React from 'react';
import './Note.css';
import NoteMenuContainer from './NoteContent/NoteMenu/NoteMenuContainer';
import NoteWorkplaceContainer from './NoteContent/NoteWorkplace/NoteWorkplaceContainer';
import NoteSortContainer from './NoteContent/NoteSort/NoteSortContainer'
import NoteTitle from './NoteTitle/NoteTitle';

let Note = () => {

    return(
        <div className="note">
            <NoteTitle/>
            <div className="note__content">
                <NoteMenuContainer/> 
                <NoteSortContainer/>
                <NoteWorkplaceContainer/>
            </div>
        </div>
    )
};

export default Note;