import React from 'react';
import NoteModal from "./NoteModal";
import { connect } from 'react-redux';
import { deleteNote, editNoteTitle, editNoteText } from '../../../../../redux/reducers/note-reducer';

let NoteModalContainer = (props) => {
    return(<NoteModal
                active={props.active}
                setActive={props.setActive}
                note={props.note}
                deleteNote={props.deleteNote}
                editNoteTitle={props.editNoteTitle}
                editNoteText={props.editNoteText}
                categories={props.categories}
            />)
};

let mapStateToProps = ({notesPage}) => {
    return {
        notes: notesPage.notes,
        categories: notesPage.categories
    }
};

export default connect(mapStateToProps, {deleteNote, editNoteTitle, editNoteText})(NoteModalContainer);