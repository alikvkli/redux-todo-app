import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, toggleTodoAsync,destroyTodoAsync } from "../redux/todos/services";
import { selectFilteredTodos } from "../redux/todos/todosSlice";


import Loading from "./Loading";
import Error from "./Error";



const TodoList = () => {
    const dispatch = useDispatch();
    const filteredTodos = useSelector(selectFilteredTodos);
    const isLoading = useSelector(state => state.todos.isLoading);
    const error = useSelector(state => state.todos.error);

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch]);

    const HandleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({ id, data: { completed } }));
    }

    const HandleDestroy = async (id) => {
        await dispatch(destroyTodoAsync(id));
    }

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <ul className="todo-list">
            {
                filteredTodos.map((item) => (
                    <li key={item.id} className={item.completed ? 'completed' : ''}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.completed} onChange={() => HandleToggle(item.id, !item.completed)} />
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => HandleDestroy(item.id)}></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoList;