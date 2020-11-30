import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateColor } from '../../../../../utils/calculateColor';
import { clearInput } from '../../../../../utils/clearInput';
import './NoteCategoriesList.css';
import ColorPalette from '../../../../Common/ColorPalette/ColorPalette';
import data from '../../../../Common/ColorPalette/colors.json';

const defaultColor = data.colorsList[7].color

let NoteCategoriesList = ({
    categories, newTitleText, newMessageText, addNote,
    setNewTitleText, setNewMessageText, addCategory}) => {

    let [toggledSelect, setToggleSelect] = useState(false)
    let [currentCategory, setCurrentCategory] = useState(categories[0])
    let [toggledColorPalette, setToggledColorPalette] = useState(false)
    let [toggleInputCategory, setToggleInputCategory] = useState(false)
    let [newCategoryText, setNewCategoryText] = useState("")
    let [currentColor, setCurrentColor] = useState(defaultColor)

    // ! Функции создания

    let addNewNote = () => {
        if (newTitleText !== "" && newMessageText !== ""){
            addNote(newTitleText, newMessageText, currentCategory, currentCategory.color);
            setNewTitleText("");
            setNewMessageText("");
            setCurrentCategory(categories[0]);
        }
    }

    let addNewCategory = () => {
        if (newCategoryText !== ""){
            addCategory(newCategoryText, currentColor);
            setToggleInputCategory(false);
            setNewCategoryText("");
            setCurrentColor(defaultColor);
        }
    }

    // ! toggle-функции

    let toggleColorPalette = () => {
        setToggledColorPalette(!toggledColorPalette);
    }

    let toggleAddCategoryInput = () => {
        setToggleInputCategory(!toggleInputCategory);
        setToggleSelect(false);
    }

    let toggleSelector = () => {
        setToggleSelect(!toggledSelect);
    }
    
    // ! onChange-функции

    let newCategoryInputOnChange = (e) => {
        let inputValue = e.target.value
        setNewCategoryText(inputValue);
        clearInput(newCategoryText, inputValue);
    }

    // ! функции для выборки

    let chooseCategory = (e) => {
        let choosedCategoryId = e.target.id
        setCurrentCategory(categories[choosedCategoryId]);
        toggleSelector();
    }

    let chooseColor = (e) => {
        let choosedColor = e.target.id
        setCurrentColor(choosedColor.split("_")[1]);
        toggleColorPalette();
    }

    return (
        <div className="note__menu_categories">
            <div className="note__menu_categories-list">
                <div className="categories_list-header">
                    <span className="categories_list__current" onClick={toggleInputCategory ? undefined : toggleSelector}>

                    { toggleInputCategory ? 
                        <span>
                            <input value={newCategoryText} onChange={newCategoryInputOnChange}/>
                            <div className="color-square" style={calculateColor(currentColor)} onClick={toggleColorPalette}></div>
                            <ColorPalette taggleState={toggledColorPalette} chooseFunc={chooseColor}/>
                        </span>
                        
                      : <span>
                            {currentCategory.categoryName}
                            <div className="color-square" style={calculateColor(currentCategory.color)}></div>
                            {toggledSelect === true ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
                        </span>
                    }
        
                    </span>
                </div>
                <div className={toggledSelect === true ? "categories_list__body.is-active" : "categories_list__body"}>
                    { categories.map((item, index) => 
                        <div key={index} className="categories_list__item">
                            <div onClick={chooseCategory} id={index}>
                                {item.categoryName}
                            </div>
                            <div className="color-square" style={calculateColor(item.color)}></div>
                        </div>
                    )}
                </div>              
            </div>
            <div className="note__menu_add-category">
                <button onClick={toggleInputCategory ? addNewCategory : toggleAddCategoryInput}><i className="fas fa-plus"></i></button>
            </div>
            <div className="note__menu_add-note">
                <button onClick={addNewNote}>Добавить <i className="fas fa-plus"></i></button>
            </div>
        </div>
    );
};

NoteCategoriesList.propTypes = {
    categories: PropTypes.object,
    newTitleText: PropTypes.string,
    newCategoryText: PropTypes.string,
    addNote: PropTypes.func,
    setNewTitleText: PropTypes.func,
    setNewMessageText: PropTypes.func,
    addCategory: PropTypes.func
}

export default NoteCategoriesList;