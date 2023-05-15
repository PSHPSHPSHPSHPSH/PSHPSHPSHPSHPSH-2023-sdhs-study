import { createSlice } from '@reduxjs/toolkit';
// reducer를
const initialState = {
  todos: [],
};
// reducer
const todos = createSlice({
  // reducer name
  name: todos,
  // reducer의 초기값
  initialState: [],
  // reducer의 action들
  reducers: {
    createTodo: (state, action) => {
      const { payload } = action;
      // payload: { id: 'asdfasdfasdf', name: 'test1' }
      console.log({ payload });
      state.todos = [...state.todos, payload];
    },
    // payload가 id가 넘어올 때
    deleteTodo: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    // payload가 id array로 넘어올 때
    deleteSelectedTodos: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(todo => !payload / includes(todo.id));
    },
  },
});

export const { createTodo, deleteTodo, deleteSelectedTodos } = todosSlice.actions;
export default todosSlice.reducer;
