import React, { Component, useState } from 'react';
import ToDoList from "./toDoList";
import ToDoForm from "./toDoForm";

import dataTodo from "./data.json"

function TodoList() {
    const [ toDoList, setToDoList ] = useState(dataTodo);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }

    return (
        <div className="todoListMain">
            <ToDoForm addTask={addTask}/>
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>

        </div>
    )
}
export default TodoList