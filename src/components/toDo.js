import React from 'react';

const ToDo_Ft = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div className={todo.complete ? "strike" : "noStrike"} id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} >
            {todo.task}
        </div>
    );
};

export default ToDo_Ft;