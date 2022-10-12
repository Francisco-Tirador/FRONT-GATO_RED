import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {

const navigate=useNavigate()
const redireccionRegister=()=>{
  navigate('/Register')
}

const {handleSubmit,reset,register}=useForm()
const [isErrLogin, setisErrLogin] = useState(false)
//?refrescadad// isErrLogin es el valor que tiene, setisErrLogin es el valor que cambia y useState el valor predeterminado

const submit= data=>{
 
  console.log(data)
  const URL="https://api-gato-red.onrender.com/api-gato-red/v1/auth"
  axios.post(URL,data)
  .then(res=>{//!aqui nos retorna el token para guiardar en el local storage
    localStorage.setItem('token',res.data.token),//!asi mandamos cosas al local storage (1valor(nombre con el que queremos guardar yel valor ))
    navigate('/Home')
 
    localStorage.setItem('IdUser',res?.data?.userId)
  })
  .catch(res=>{console.log(res.response),
    setisErrLogin(true)
    setTimeout(()=>{
       setisErrLogin(false)
    },10000),
    reset({
      password:''  //!aqui el reset viene de useState y volvemos las propiedades a un estado que nosotros le pasamos
    })
  })//TODO-esta es la forma para agarrar un texto con handelSubmit y register los id hacen referencia a los htmlForm

}

return (
    <div className='Login'>
      <div className='titulo'><h1>Hola Brou CAT</h1></div>
      <div>
      
      <form onSubmit={handleSubmit(submit)}>
      
     <ul className="login_list">
      <li className="loginItem"><label htmlFor="login-email" className="login__label">Email</label>
      <input type="email" className=" editedImput " id='login-email' placeholder='ingresa tu emeil (GATO@gmail.com)' {...register('emeil')}/></li>
      
      <li className="loginItem"><label htmlFor="login-pass" className="login__label">Password</label>
      <input type="password" className=" editedImput" id='login-pass'placeholder='ingresa tu contraseña'{...register("password")}/></li>
     </ul>
     <div>
     {
      isErrLogin&&'Intenta de nuevo no encontramos estas credenciales'
     }
      </div>
     <button><img src="https://cdn-icons-png.flaticon.com/512/7817/7817034.png" className='icono' /> Entremos de nuevo</button>
     </form>
     </div>
    <button  onClick={redireccionRegister}> <img src="https://cdn-icons-png.flaticon.com/512/7817/7817039.png" className='icono' />Crear cuenta nueva</button>
    </div>
  )
}

export default Inicio