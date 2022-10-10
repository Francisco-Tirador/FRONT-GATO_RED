import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Register = () => {
const{handleSubmit,reset,register}=useForm()
const navigate=useNavigate()
const toReturn=()=>{
    navigate('/Inicio')
}


const submit=(data)=>{
    console.log(data)
    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/users/register"
    axios.post(URL,data)
    .then(res=>{
        console.log(res.data)
        navigate('/Inicio')
    })
    .catch(err=>{
        console.log(err.response.data.message)
    })
}


  return (
    <div>
        <form className='Form_Register' onSubmit={handleSubmit(submit)}>
            <ul>
            <li className="loginItem"><label htmlFor="register-name" className="login_label">Nombre(mote)</label>
      <input type="text" className="login_input" id='register-name' {...register('name')} required/></li>

      <li className="loginItem"><label htmlFor="register-age" className="login_label">Edad</label>
      <input type='number'min={1}max={100} className="login_input" id='register-age' {...register('age')} required/></li>
      
            <li className="loginItem"><label htmlFor="register-email" className="login_label">Email</label>
      <input type="email" className="login_input" id='register-email' {...register('emeil')} required/></li>

      <li className="loginItem"><label htmlFor="register-password" className="login_label">Password</label>
      <input type="text" className="login_input" id='register-password' {...register('password')} required/></li>
     
            </ul>
        <button>Comencemos</button>
        </form>
        <button onClick={toReturn}>Regresar</button>
    </div>
  )
}

export default Register