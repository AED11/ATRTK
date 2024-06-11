import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from '../reducers/todolist/todoSlice'

export const store = configureStore({
	reducer: {
		todolist: todolistReducer,
	},
})
