import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

const Form = () => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        if(!title) return;
        e.preventDefault();
        dispatch(addTodo({ title}));
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