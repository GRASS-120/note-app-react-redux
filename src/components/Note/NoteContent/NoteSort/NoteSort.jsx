import React, {useState} from 'react';
import { calculateColor } from '../../../../utils/calculateColor';
import CategoriesListBody from '../NoteMenu/NoteCategoriesList/CategoriesListBody/CategoriesListBody';
import './NoteSort.css';

let NoteSort = ({categories, filterNotes, deleteFilter}) => {

    let [currentCategory, setCurrentCategory] = useState(categories[0])
    let [toggledSelect, setToggleSelect] = useState(false)
    let [filtered, setFiltered] = useState(false)

    let toggleSelector = () => {
        setToggleSelect(!toggledSelect);
    };

    let addFilter = () => {
        filterNotes(currentCategory.categoryName)
        setFiltered(true)
    };

    let remoteFilter = () => {
        deleteFilter()
        setFiltered(false)
        setCurrentCategory(categories[0])
    };

    return (
        <div className="note__sort">
            <div className="note__sort_categories">
                <span className="categories_list__current" onClick={toggleSelector}>
                   <span>
                        {currentCategory.categoryName}
                        <div className="color-square" style={calculateColor(currentCategory.color)}></div>
                        {toggledSelect === true ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
                    </span>
                </span>
                <CategoriesListBody
                    toggledItem={toggledSelect}
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    toggleFunc={toggleSelector}
                />
            </div>  
            <button disabled={filtered} className="note__sort_button" onClick={addFilter}>
                Фильтровать<i class="fas fa-sort-amount-up"></i>
            </button>
            <button className="note__unsort_button" onClick={remoteFilter}>
                Убрать фильтр<i class="fas fa-sort-amount-down-alt"></i>
            </button>
        </div>
    )
};

export default NoteSort;