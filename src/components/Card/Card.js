import React from 'react';
import './card.scss';

const Card = (props) => {

    var arrayIngredient = Object.keys(props.drink).filter(function(k) {
        return k.indexOf('strIngredient') === 0;
    }).reduce(function(newData, k) {
        newData[k] = props.drink[k];
        return newData;
    }, {});

    var arrayMeasure = Object.values(Object.keys(props.drink).filter(function(k) {
        return k.indexOf('strMeasure') === 0;
    }).reduce(function(newData, k) {
        newData[k] = props.drink[k];
        return newData;
    }, {}));

    const finalArray = [];

    Object.values(arrayIngredient).forEach((value, index) => {
        if (value) {
            finalArray.push({
                mesure: arrayMeasure[index],
                ingredient: value
            })
        }
    });
        
    return(
        <article>
            <div>
                <img src={props.drink.strDrinkThumb} alt=""/>
            </div>
            <div>
                <h2 className="title">{props.drink.strDrink}</h2>
                <div>
                    <div className="category">{props.drink.strCategory}</div>
                    <div className="instructions">{props.drink.instructions}</div>
                    <ul>
                        {finalArray.map((value, index) =>
                            <li key={index} >
                                <span className="ingredient">{value.mesure}</span>
                                <span className="quantity">{value.ingredient}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </article>
    )
};

export default Card;