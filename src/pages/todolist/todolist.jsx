import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTodoImg, getData, postTodoImg } from '../../reducers/todolist/todoSlice'
import { Link } from 'react-router-dom'
import { combineSlices } from '@reduxjs/toolkit'

const API = 'http://65.108.148.136:8080/images/'
export default function Todolist() {
	let dispatch = useDispatch()
	useEffect(() => {
		dispatch(getData())
	}, [])

	let data = useSelector(state => state.todolist.data)
	let [img, setImg] = useState(null)

  function mechanic(e, idx){
    e.preventDefault()
    let formData = new FormData()
    let files = e.target.Images.files
    if(files){
      for(let i = 0;i < files.length;i++){
        formData.append("Images", files[i])
      }
    }
    formData.append('ToDoId', idx)
    dispatch(postTodoImg(formData)) 
  }
	return (
		<div>
			{data?.map(el => {
				return (
					<div key={el.id}>
						<Link to={`todolist/${el.id}`}>
							<p>{el.name}</p>
						</Link>
						<p>{el.description}</p>
						{el.images.map(e => {
							return (
								<div key={el.id}>
									<img key={e.id} src={API + e.imageName} />
                  <button onClick={() => dispatch(delTodoImg(e.id))}>Del</button>
								</div>
							)
						})}
						<form action='' onSubmit={(e) => {mechanic(e, el.id)}}>
							<input type='file' name='Images' multiple />
							<button type='submit'>Add img</button>
						</form>
					</div>
				)
			})}
		</div>
	)
}
