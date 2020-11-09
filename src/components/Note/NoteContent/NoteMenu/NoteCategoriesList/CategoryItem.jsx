import React from 'react';

let CategoryItem = ({chooseCategory, index, categoryName, color, matchColor}) => {
    return (
        <div className="categories_list__item">
            <div onClick={chooseCategory} id={index}>
                {categoryName}
            </div>
            <div className="color-square" style={matchColor(color)}></div>
        </div>
    )
}

export default CategoryItem;