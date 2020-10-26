import React from "react";

const ActionButton = (props) => {

    const handlerSave = () => {
        alert("You liked")
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