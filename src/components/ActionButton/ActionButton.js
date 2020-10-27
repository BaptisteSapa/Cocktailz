import React from "react";
import { current } from "immer";

const ActionButton = (props) => {

    const handlerSave = () => {
        const currentStorage = localStorage.getItem('savedDrinks');

        if (currentStorage === null) {
            currentStorage = [];
        }

        currentStorage.push(JSON.stringify(props.drink))
        localStorage.setItem('savedDrinks', currentStorage);
    }

    const handlerDelete = () => {
        alert("You disliked")
    }

    return (
    <button 
        className={props.type === "save" ? 'save' : 'dislike'}
        onClick={() => {
            if (props.type === 'save') {
                handlerSave();
            }else{
                handlerDelete();
            }
        }}
    >
        { props.type === "save" && "Je like" }
        { props.type === "delete" && "Je dislike" }
    </button>
    )

}

export default ActionButton;