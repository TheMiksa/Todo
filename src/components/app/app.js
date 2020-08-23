import React, {Component} from 'react';
import { v4 } from 'uuid';

import TopPanel from "../top-panel";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import "./app.css";
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        filter: 'all',
        term: '',
        btn: ["btn btn-info", "btn btn-outline-secondary", "btn btn-outline-secondary"]
    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: v4()
        };
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const newTodoData = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newTodoData
            }
        })
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];
            return {
                todoData: newTodoData
            };
        });
    };

    toggleProperty(arr, id, propName) {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
            };
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
    }
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const toggleImportant = this.toggleProperty(todoData, id, 'important');
            return {
                todoData: toggleImportant
            };
        });
    };
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const toggleDone = this.toggleProperty(todoData, id, 'done');
            return {
                todoData: toggleDone
            };
        });
    };

    onSearchChange = (text) => {
       this.setState(() => {
           return {
               term: text
           }
       });
    };
    search = (items, term) => {

        return items.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1);

    };

    toFilter = (filter) => {

        switch (filter) {
            case 'all':
                return this.state.todoData;
            case 'active':
                return this.state.todoData.filter((el) => !el.done);
            case 'done':
                return this.state.todoData.filter((el) => el.done);
        }

    };
    toFilterPattern = (status, btnPos) => {
        this.setState(({filter}) => {
            if (filter !== status) {
                const btnArr = ["btn btn-outline-secondary", "btn btn-outline-secondary", "btn btn-outline-secondary"];
                btnArr[btnPos] = "btn btn-info";
                return {
                    filter: status,
                    btn: [...btnArr]
                };
            }
        });
    };
    toFilterAll = () => {
        return this.toFilterPattern('all', 0);
    };
    toFilterActive = () => {
        return this.toFilterPattern('active', 1);
    };
    toFilterDone = () => {
        return this.toFilterPattern('done', 2);
    };

    render() {
        const { todoData, term, filter, btn } = this.state;
        let visible = this.toFilter(filter);
        visible = this.search(visible, term);

        const btnStyle = [...btn];

        const doneCount = todoData
            .filter((el) => el.done === true).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="app">
                <AppHeader
                        done={doneCount}
                        toDo={todoCount}/>
                <TopPanel onSearchChange={this.onSearchChange}
                          btnStyle={btnStyle}
                          onClickAll={this.toFilterAll}
                          onClickActive={this.toFilterActive}
                          onClickDone={this.toFilterDone}/>
                <TodoList
                        todos={visible}
                        onDeleted={ this.deleteItem }
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdded={ this.addItem }/>
            </div>
        );
    }
};

