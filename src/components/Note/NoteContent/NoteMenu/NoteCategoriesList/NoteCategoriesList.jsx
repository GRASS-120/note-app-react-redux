import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NoteCategoriesList.css';
import data from '../../../../Common/ColorPalette/colors.json';
import CategoriesListBody from './CategoriesListBody/CategoriesListBody';
import CurrentCategory from './CategoriesListBody/CurrentCategory';

const defaultColor = data.colorsList[7].color

let NoteCategoriesList = ({
    categories, newTitleText, newMessageText, addNote,
    setNewTitleText, setNewMessageText, addCategory}) => {

    let [toggledSelect, setToggleSelect] = useState(false)
    let [currentCategory, setCurrentCategory] = useState(categories[0])
    let [toggleInputCategory, setToggleInputCategory] = useState(false)
    let [newCategoryText, setNewCategoryText] = useState("")
    let [currentColor, setCurrentColor] = useState(defaultColor)


    let addNewNote = () => {
        if (newTitleText !== "" && newMessageText !== ""){
            addNote(newTitleText, newMessageText, currentCategory.categoryName, currentCategory.color);
            setNewTitleText("");
            setNewMessageText("");
            setCurrentCategory(categories[0]);
        }
    };

    let addNewCategory = () => {
        if (newCategoryText !== ""){
            addCategory(newCategoryText, currentColor);
            setToggleInputCategory(false);
            setNewCategoryText("");
            setCurrentColor(defaultColor);
        }
    };

    let toggleAddCategoryInput = () => {
        setToggleInputCategory(!toggleInputCategory);
        setToggleSelect(false);
    };

    let toggleSelector = () => {
        setToggleSelect(!toggledSelect);
    };

    return (
        <div className="note__menu_categories">
            <div className="note__menu_categories-list">
                <CurrentCategory
                    newCategoryText={newCategoryText}
                    setNewCategoryText={setNewCategoryText}
                    setCurrentColor={setCurrentColor}
                    toggleInputCategory={toggleInputCategory}
                    toggleSelector={toggleSelector}
                    currentColor={currentColor}
                    currentCategory={currentCategory}
                    toggledSelect={toggledSelect}
                />
                <CategoriesListBody
                    toggledItem={toggledSelect}
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    toggleFunc={toggleSelector}
                />
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
};

export default NoteCategoriesList;