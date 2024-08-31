import { nanoid } from "nanoid";
import styled from "styled-components";
import React, {Component} from "react";
import initalTasks from './data/initalTasks.json';
import TodoList from "./Components/TodoList/TodoList";
import TodoEditor from "./Components/TodoEditor/TodoEditor";
import Filter from "./Components/Filter/Filter";
import Info from "./Components/Info/Info";

const Section = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px;
`;

export default class App extends Component {
    state = {
        todos: initalTasks,
        filter: '',
    }
    render(){
        const { todos, filter } = this.state;
        return <>
            <div className="App">
                <Section>
                    <Info allTasksCount={todos.length} completedTasksCount={todos.filter(todo => todo.completed).length} />
                    <TodoEditor addTask={(textValue, inputEl) => (inputEl.value='', this.setState(prevState => ({ todos: [
                        ...todos,
                        {
                            id: nanoid(),
                            text: textValue,
                            completed: false
                        },
                    ], filter: filter })))} />
                    <Filter changeFilter={(filterVal) => this.setState(prevState => ({todos: todos, filter: filterVal}))} />
                    <TodoList todoList={filter !== '' ? todos.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase())) : todos} deleteTask={(id) => this.setState(prevState => ({ todos: todos.filter(todo => todo.id !== id), filter: filter }))} completeTask={(id, status) => this.setState(prevState => ({ todos: todos.map(todo => todo.id === id ? {
                        id: todo.id,
                        text: todo.text,
                        completed: status
                    } : todo), filter: filter }))} />
                </Section>
            </div>
        </>
    }
}