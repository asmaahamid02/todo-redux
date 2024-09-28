import { TTodo } from '../types/todo'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { TTodoState } from '../types/todo'

const initialState: TTodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: TTodo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
        date: new Date(),
      }

      state.todos.push(todo)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed ? null : new Date(),
          }
        }

        return todo
      })
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          }
        }

        return todo
      })
    },
  },
})

export const { addTodo, removeTodo, toggleCompleted, editTodo } =
  todoSlice.actions
export default todoSlice.reducer
