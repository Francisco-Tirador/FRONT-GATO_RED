import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'

const CreatePost = () => {
const navigate=useNavigate()
const {handleSubmit,reset,register}=useForm()

const submit=(data)=>{
    console.log(data)
    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/poust"
    axios.post(URL,data,tokenConfig())
    .then(res=>{console.log(res),
        navigate('/')
        
    })
    .catch(res=>console.log(res))
}


const toReturn=()=>{
    navigate('/')
}
  return (
    <div className='editedPost' >
        <div className='Postbutton'>
            <button onClick={toReturn}> 
            <img src='https://cdn-icons-png.flaticon.com/512/2099/2099190.png'
            />   REGRESEMOS</button>
            </div>  
        
          <div className='titulo'><h1>Crear nuevo post</h1></div>
        <form onSubmit={handleSubmit(submit)}>
            <ul>
                <li><label htmlFor='register-tittle'>Titulo</label>
                    <input className='editedImput' type='text'id='register-tittle' {...register('tittle')}></input>
                </li>

                <li><label htmlFor='resgister-content'>Contenido</label>
                    <input className='editedImput' type='text' id='resgister-content' {...register('content')}></input>

                </li>
                <li><label htmlFor='register-URL'>URL de imagen(opcional)</label>
                    <input className='editedImput' type='text'id='register-URL' {...register('img')}></input>
                    
                </li>
            </ul>
            <button>Nuevo Post</button>
        </form>
        
    </div>
  )
}

export default CreatePost