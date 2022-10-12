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
    <div className='editedPost'>
        <div className='Postbutton'>
            <button onClick={toReturn}> 
            <img src='https://cdn-icons-png.flaticon.com/512/2099/2099190.png'
            />   REGRESEMOS</button>
            </div>  
            <div className='titulo'><h1>Crear nuevo usuario</h1></div>
        <form className='Form_Register' onSubmit={handleSubmit(submit)}>
            <ul>
            <li className="loginItem"><label htmlFor="register-name" className="login_label">Nombre(mote)</label>
      <input type="text" className="editedImput" id='register-name' {...register('name')} required autoComplete='off'/></li>

      <li className="loginItem"><label htmlFor="register-age" className="login_label">Edad</label>
      <input type='number'min={16}max={100} className="" id='register-age' {...register('age')} required autoComplete='off'/></li>
      
            <li className="loginItem"><label htmlFor="register-email" className="login_label">Email</label>
      <input type="email" className="editedImput" id='register-email' {...register('emeil')} required autoComplete='off'/></li>

      <li className="loginItem"><label htmlFor="register-password" className="login_label">Password</label>
      <input type="text" className="editedImput" id='register-password' {...register('password')} required autoComplete='off'/></li>
     
            </ul>
        <button><img className='icono' src="https://cdn-icons-png.flaticon.com/512/7817/7817034.png"  /> Comencemos</button>
        </form>
    </div>
  )
}

export default Register