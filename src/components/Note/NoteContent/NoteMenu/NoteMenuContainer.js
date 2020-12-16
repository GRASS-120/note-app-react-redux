import React from 'react';
import { connect } from 'react-redux';
import { addCategoryAC, addNoteAC } from '../../../../redux/reducers/note-reducer';
import NoteMenu from './NoteMenu';

let NoteMenuContainer = (props) => {
    return(<NoteMenu
        notes={props.notes}
        categories={props.categories}
        addNote={props.addNote}
        addCategory={props.addCategory}
    />)
};

let mapStateToProps = ({notesPage}) => {
   return {
       categories: notesPage.categories,
       notes: notesPage.notes
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNote: (title, text, category, color) => {
            let action = addNoteAC(title, text, category, color)
            dispatch(action)
        },

        addCategory: (categoryName, color) => {
            let action = addCategoryAC(categoryName, color)
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteMenuContainer);