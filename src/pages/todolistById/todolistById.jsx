import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodoById } from '../../reducers/todolist/todoSlice'
const API = 'http://65.108.148.136:8080/images/'
const TodolistById = () => {
  let {id} = useParams()
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodoById(id))
  }, [])
  let dataById = useSelector((state) => state.todolist.dataById)
  return (
		<div>
			<div>
				<p>{dataById?.name}</p>
				<p>{dataById?.description}</p>
				{dataById?.images?.map(e => {
					return <img key={e.id} src={API + e.imageName} />
				})}
			</div>
		</div>
	)
}

export default TodolistById