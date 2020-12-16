import React from 'react';
import { calculateColor } from '../../../../../../utils/calculateColor';
import './CategoriesListBody.css';

let CategoriesListBody = ({toggledItem, categories, setCurrentCategory, toggleFunc}) => {

    let chooseCategory = (e) => {
        let choosedCategoryId = e.target.id
        setCurrentCategory(categories[choosedCategoryId]);
        toggleFunc();
    };

    return (
        <div className={toggledItem === true ? "categories_list__body.is-active" : "categories_list__body"}>
            { categories.map((item, index) => 
                <div key={index} className="categories_list__item" onClick={chooseCategory} id={index}>
                    <div onClick={chooseCategory} id={index}>
                        {item.categoryName}
                    </div>
                    <div className="color-square" style={calculateColor(item.color)} onClick={(e) => e.stopPropagation()}></div>
                </div>
            )}
         </div>      
    );
};

export default CategoriesListBody;