import React, { useEffect } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'
import { saveToken } from '../../utils/token'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  async function login(){
    try{
      let { data } = await axiosRequest.post('Account/login', {userName: "ehson", password: '2s 007'})
      if(data.statusCode == '200'){
      saveToken(data.data)
        navigate("/")
      }

      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  
  return (
		<div>
			<button onClick={() => login()}>Login</button>
		</div>
	)
}

export default Login