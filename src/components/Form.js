import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/services";
import Error from './Error';
const Form = () => {

    const [title, setTitle] = useState('');

    const isLoading = useSelector(state => state.todos.addNewTodoLoading);
    const error = useSelector(state => state.todos.addNewTodoError);

    const handleSubmit = async (e) => {
        if (!title) return;
        e.preventDefault();
        await dispatch(addTodoAsync({ title }));
        setTitle('');
    }

    const dispatch = useDispatch();

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input disabled={isLoading} className="new-todo" placeholder="ne yapmak istersiniz?" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
            {isLoading && <span style={{ paddingRight: 10 }}>Loading...</span>}
            {error && <Error message={error} />}
        </form>
    );
}

export default Form;