import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
const Form = () => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: nanoid(), title, completed: false }));
        setTitle('');
    }

    const dispatch = useDispatch();

    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" placeholder="ne yapmak istersiniz?" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        </form>
    );
}

export default Form;