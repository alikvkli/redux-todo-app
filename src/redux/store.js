import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../redux/todos/todosSlice";


export  const store = configureStore({
    reducer : {
        todos: todosSlice
    }
})