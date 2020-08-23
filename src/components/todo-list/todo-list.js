import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeleted,
                      onToggleDone, onToggleImportant }) => {

    const elements = todos.map(({id, ...otherItems}) => {
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...otherItems}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}/>
             </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;