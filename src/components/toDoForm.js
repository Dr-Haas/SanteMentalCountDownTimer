import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form style={{display:'flex', flexDirection:'column', jusityContent:'center', margin:'0 40px 0'}} onSubmit={handleSubmit}>
            <input className="inputTask" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <div>
                <button className="submitButton">Submit</button>
            </div>
        </form>
    );
};

export default ToDoForm;