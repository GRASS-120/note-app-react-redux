import React from 'react'
import NoteWorkplace from "./NoteWorkplace";
import { connect } from 'react-redux';

let NoteWorkplaceContainer = (props) => {
    return(<NoteWorkplace notes={props.notes}/>)
};

let mapStateToProps = ({notesPage}) => {
    return {
        notes: notesPage.notes
    }
};

export default connect(mapStateToProps, {})(NoteWorkplaceContainer);