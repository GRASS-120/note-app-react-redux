import React from 'react'
import NoteSort from "./NoteSort";
import { connect } from 'react-redux';
import { filterNotes, deleteFilter } from '../../../../redux/reducers/note-reducer'

let NoteSortContainer = (props) => {
    return(<NoteSort categories={props.categories} filterNotes={props.filterNotes} deleteFilter={props.deleteFilter}/>)
};

let mapStateToProps = ({notesPage}) => {
    return {
        notes: notesPage.notes,
        categories: notesPage.categories
    }
};

export default connect(mapStateToProps, {filterNotes, deleteFilter})(NoteSortContainer);