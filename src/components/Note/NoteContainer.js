import React from 'react'
import Note from "./Note";
import { connect } from 'react-redux';

let NoteContainer = (props) => {
    return(<Note notes={props.notes}/>)
};

let mapStateToProps = ({notesPage}) => {
    return {notes: notesPage.notes}
};

export default connect(mapStateToProps, {})(NoteContainer)