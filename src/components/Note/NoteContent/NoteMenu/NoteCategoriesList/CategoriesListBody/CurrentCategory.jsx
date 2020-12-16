import React, {useState} from 'react';
import { calculateColor } from '../../../../../../utils/calculateColor';
import { clearInput } from '../../../../../../utils/clearInput';
import ColorPalette from '../../../../../Common/ColorPalette/ColorPalette';

let CurrentCategory = ({
    newCategoryText, setNewCategoryText, setCurrentColor,
    toggleInputCategory, toggleSelector, currentColor, currentCategory, toggledSelect
}) => {

    let [toggledColorPalette, setToggledColorPalette] = useState(false)

    let toggleColorPalette = () => {
        setToggledColorPalette(!toggledColorPalette);
    };

    let newCategoryInputOnChange = (e) => {
        let inputValue = e.target.value
        setNewCategoryText(inputValue);
        clearInput(newCategoryText, inputValue);
    };

    let chooseColor = (e) => {
        let choosedColor = e.target.id
        setCurrentColor(choosedColor.split("_")[1]);
        toggleColorPalette();
    };

    return (
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
    )
};

export default CurrentCategory;