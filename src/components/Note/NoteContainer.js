import React from 'react'
import Note from "./Note";
import { connect } from 'react-redux';
// import { setNotesListOnDragAC } from '../../redux/reducers/note-reducer'

let NoteContainer = (props) => {
    return(<Note notes={props.notes} setNotesListOnDrag={props.setNotesListOnDrag}/>)
};

let mapStateToProps = ({notesPage}) => {
    return {notes: notesPage.notes}
};

let mapDispatchToProps = (dispatch) => {
    return {
        // setNotesListOnDrag: (note, currentNote) => {
        //     let action = setNotesListOnDragAC(note, currentNote)
        //     dispatch(action)
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)