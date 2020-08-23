import React from "react";

import "./app-header.css"

const AppHeader = ({done, toDo}) => {
    const status = `${toDo} more to do, ${done} done`;
    return (
        <div className="todo-header">
            <h1 className="todo-header-name">Todo List</h1>
            <div className="todo-header-status">
                <span> {status}</span>
            </div>
        </div>
    );
};

export default AppHeader;