import { createSlice } from "@reduxjs/toolkit";
import {getTodosAsync,addTodoAsync,toggleTodoAsync,destroyTodoAsync} from './services';

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        addNewTodoLoading: false,
        addNewTodoError: null,
        activeFilter: localStorage.getItem('activeFilter') ? localStorage.getItem('activeFilter') : 'all',
    },
    reducers: {
        /*destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        }, */
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered;
        },
    },
    extraReducers: {
        //get todos
        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //add todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodoLoading = true;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodoLoading = false;

        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodoLoading = false;
            state.addNewTodoError = action.error.message;
        },
        //toggle todo
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items[index].completed = completed;
        },
        //destroy
        [destroyTodoAsync.fulfilled]: (state, action) => {
            const id  = action.payload;
            const deleteItem = state.items.filter((item) => item.id !== id);
            state.items = deleteItem;
        }

    }
});
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === 'all') {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed === true
    );
};
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;