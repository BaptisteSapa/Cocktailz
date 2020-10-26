import React from 'react';
import './card.scss';
import Main from "../Main/Main";

const Card = (props) => {

    const ingredients = () => {



        return ingredients;
    };

    return(
        <article>
            <div>
                <img src={props.strDrinkThumb} alt=""/>
            </div>
            <div>
                <h2 className="title">{props.strDrink}</h2>
                <div>
                    <div className="category">{props.strCategory}</div>
                    <div className="instructions">{props.instructions}</div>
                    <ul>
                        {props.map((number) =>
                            <ListItem key={number.toString()}
                                      value={number} />
                        )}
                        <li>
                            <span className="ingredient">Coffee</span>
                            <span className="quantity">8 oz</span>
                        </li>
                        <li>
                            <span className="ingredient">Coffee</span>
                            <span className="quantity">8 oz</span>
                        </li>
                        <li>
                            <span className="ingredient">Coffee</span>
                            <span className="quantity">8 oz</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
};

export default Card;