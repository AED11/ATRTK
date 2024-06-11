import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const API = 'http://65.108.148.136:8080/ToDo/'
export const getData = createAsyncThunk(("todolist/getData"), async () => {
  try{
    let { data } = await axios.get(API + "get-to-dos")
    return data
  }catch(error){
    console.log(error)
  }
})

export const getTodoById = createAsyncThunk('todolist/getTodoById', async id => {
	try {
		let { data } = await axios.get(API + 'get-to-do-by-id?id=' + id)
		return data
	} catch (error) {
		console.log(error)
	}
})

export const postTodoImg = createAsyncThunk('todolist/postTodoImg', async (todo, {dispatch}) => {
	try {
		let { data } = await axios.post(API + 'add-to-do-images', todo) 
    dispatch(getData())

	} catch (error) {
		console.log(error)
	}
})

export const delTodoImg = createAsyncThunk(
	'todolist/delTodoImg',
	async (id, { dispatch }) => {
		try {
			let { data } = await axios.delete(API + 'delete-to-do-image?imageId=' + id)
			dispatch(getData())
		} catch (error) {
			console.log(error)
		}
	}
)


export const todolistSlice = createSlice({
	name: 'todolist',
	initialState: {
    data: [],
    dataById : []
  },
	reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload?.data
    })

    builder.addCase(getTodoById.fulfilled, (state, action) => {
			state.dataById = action.payload?.data
      console.log(state.dataById)
		})
  },
})

// export const {  } = counterSlice.actions

export default todolistSlice.reducer
