import React, { useState } from 'react';
import { clearInput } from '../../../../utils/clearInput';
import NoteCategoriesList from './NoteCategoriesList/NoteCategoriesList';
import './NoteMenu.css';

let NoteMenu = (props) => {

    let [newTitleText, setNewTitleText] = useState("") 
    let [newMessageText, setNewMessageText] = useState("")

    let newTitleOnChange = (e) => {
        let inputValue = e.target.value
        setNewTitleText(inputValue)
        clearInput(newTitleText, inputValue)
    }

    let newMessageOnChange = (e) => {
        let textareaValue = e.target.value
        setNewMessageText(textareaValue)
        clearInput(newMessageText, textareaValue)
    }
    
    return (
        <div className="note__menu">
            <div className="note__menu_left-panel">
                <div className="note__menu_title" >
                    <input type="text" placeholder="Название новой заметки" value={newTitleText} onChange={newTitleOnChange}/>
                </div>
                <div className="note__menu_text" >
                    <textarea placeholder="Текст новой заметки" value={newMessageText} onChange={newMessageOnChange}/>
                </div>
            </div>
            <div className="note__menu_right-panel">
                <NoteCategoriesList
                    newTitleText={newTitleText}
                    newMessageText={newMessageText}
                    categories={props.categories}
                    addNote={props.addNote}
                    addCategory={props.addCategory}
                    setNewTitleText={setNewTitleText}
                    setNewMessageText={setNewMessageText}
                />
            </div>
        </div>
    )
}

export default NoteMenu