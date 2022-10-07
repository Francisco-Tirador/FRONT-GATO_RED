import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { idU } from '../../store/slice/idUser.slice'
import tokenConfig from '../../util/tokenConfig'
const Inicio = () => {

const navigate=useNavigate()
const redireccionRegister=()=>{
  navigate('/Register')
}
const dispach=useDispatch()
const {handleSubmit,reset,register}=useForm()
const [isErrLogin, setisErrLogin] = useState(false)
//?refrescadad// isErrLogin es el valor que tiene, setisErrLogin es el valor que cambia y useState el valor predeterminado

const submit= data=>{ 
  console.log(data)
  const URL="https://api-gato-red.onrender.com/api-gato-red/v1/auth"
  axios.post(URL,data)
  .then(res=>{//!aqui nos retorna el token para guiardar en el local storage
    localStorage.setItem('token',res.data.token),//!asi mandamos cosas al local storage (1valor(nombre con el que queremos guardar yel valor ))
    dispach(idU(res.data.userId)),
    console.log(res.data)
    navigate('/Home')
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
      <div>
      <h1>Hola Brou CAT</h1>
      <form onSubmit={handleSubmit(submit)}>
      <ul className='inicioLogin'>
        <li><b>Email:</b>GatO@gmail.com</li>
        <li><b>Password:</b>GatO1234</li>
     </ul>
     <ul className="login_list">
      <li className="loginItem"><label htmlFor="login-email" className="login__label">Email</label>
      <input type="email" className="login_input" id='login-email' {...register('emeil')}/></li>
      
      <li className="loginItem"><label htmlFor="login-pass" className="login__label">Password</label>
      <input type="password" className="login_input" id='login-pass' {...register("password")}/></li>
     </ul>
     <div>
     {
      isErrLogin&&'Intenta de nuevo no encontramos estas credenciales'
     }
      </div>
     <button>Entremos de nuevo</button>
     </form>
     </div>
    <button onClick={redireccionRegister}>Crear cuenta nueva</button>
    </div>
  )
}

export default Inicio