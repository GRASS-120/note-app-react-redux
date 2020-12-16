import React, {useState} from 'react';

let NoteModalTitle = ({note, newTitle, setNewTitle, editNoteTitle, setActive}) => {

    let [titleEditTool, setTitleEditTool] = useState(false)
    let [toggleInput, setToggleInput] = useState(false)

    let changeTitle = (e) => {
        setNewTitle(e.currentTarget.value)
    };

    let confirmChangeTitle = () => {
        editNoteTitle(note?.id, newTitle)
        setActive(false)
        toggleInputEditTitle()
    };

    let toggleInputEditTitle = () => {
        setToggleInput(!toggleInput)
    };

    return (
        <div
            className="note-modal__content__title"
            onMouseOver={() => setTitleEditTool(true)}
            onMouseLeave={() => setTitleEditTool(false)}
            >
            {toggleInput === true ?
                <div>
                    <input type="text" value={newTitle} autoFocus={true} onChange={changeTitle}/>
                    <i className="fas fa-check-circle change_text" onClick={confirmChangeTitle}></i>
                    <i className="fas fa-times-circle close_text" onClick={toggleInputEditTitle}></i>
                </div>
                        
                : <p>{note?.title}</p>
            }
                    
            {titleEditTool === true && toggleInput === false ? 
            <i
                class="fas fa-pencil-alt note-modal__content__title_edit"
                onClick={toggleInputEditTitle}
            ></i> : <span></span>} 
        </div>
    )
};

export default NoteModalTitle;