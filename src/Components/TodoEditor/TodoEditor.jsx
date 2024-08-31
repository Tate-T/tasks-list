import styled from "styled-components";
import React, {Component} from "react";

const TodoEditorForm = styled.form`
    margin-top: 25px;
    border: 3px solid black;
    border-radius: 15px;
    padding: 20px;
`;
const TaskInput = styled.input`
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 15px;
    font-size: 24px;
`;
const AddTaskBut = styled.button`
    display: block;
    margin-top: 10px;
    width: 180px;
    height: 40px;
    border-radius: 10px;
    background-color: #64d12a;
    transition: all .3s;
    &:hover {
        background-color: #4ebf11;
    }
    &:active{
        background-color: #3f9e0b;
        color: #fff;
    }
`;

export default class TodoEditor extends Component{
    state = {
        textValue: '',
    }
    render(){
        return <>
            <TodoEditorForm onSubmit={(e) => (e.preventDefault(), this.state.textValue !== '' ? this.props.addTask(this.state.textValue, document.querySelector('input[name="task"]')) : alert("Task shouldn't been empty"))}>
                <TaskInput onInput={(e) => this.setState(prevState => ({textValue: e.target.value}))} name="task" />
                <AddTaskBut>Create</AddTaskBut>
            </TodoEditorForm>
        </>
    } 
}