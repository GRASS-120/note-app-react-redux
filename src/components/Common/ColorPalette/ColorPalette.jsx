import React from 'react';
import './ColorPalette.css';
import data from './colors.json';

let ColorPalette = ({taggleState, chooseFunc}) => {
    return (
        <div className={taggleState === true ? "color_palette.is-active" : "color_palette"}>
            <div className="color_palette__body">
                {data.colorsList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="color_palette__item"
                            id={`c_${item.color}`}
                            onClick={chooseFunc}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
};

export default ColorPalette;