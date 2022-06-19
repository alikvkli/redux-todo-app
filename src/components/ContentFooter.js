import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectTodos,changeActiveFilter,clearCompleted } from "../redux/todos/todosSlice";


const ContentFooter = () => {

    const items = useSelector(selectTodos);
    const activeFilter = useSelector(state => state.todos.activeFilter);
    const itemsLeft = items.filter(item => !item.completed).length;
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.setItem('activeFilter', activeFilter);
    },[activeFilter]);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft > 0 ? `${itemsLeft} tane kaldı.` : 'Hepsi bitti.'}</strong>

            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={activeFilter === 'all' ? 'selected' : ''} onClick={()=> dispatch(changeActiveFilter('all'))}>Tümü</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === 'active' ? 'selected' : ''} onClick={()=> dispatch(changeActiveFilter('active'))}>Bekleyenler</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === 'completed' ? 'selected' : ''} onClick={()=> dispatch(changeActiveFilter('completed'))}>Tamamlananlar</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Temizle
            </button>
        </footer>
    );
}

export default ContentFooter;