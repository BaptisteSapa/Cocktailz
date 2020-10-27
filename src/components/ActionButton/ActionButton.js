import React from "react";

const ActionButton = (props) => {

    const handlerSave = () => {
        let currentStorage = JSON.parse(localStorage.getItem('savedDrinks'));

        if (currentStorage === null) {
            currentStorage = [];
        }
        currentStorage.push(props.drink);
        console.log(currentStorage);
        localStorage.setItem('savedDrinks', JSON.stringify(currentStorage));
        props.setState(false);
    }

    const handlerDelete = () => {
        props.setState(false);
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