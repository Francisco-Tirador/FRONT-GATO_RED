import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import tokenConfig from '../../util/tokenConfig'

const EditPost = () => {
const [Post, setPost] = useState()
const idPost=useSelector(res=>res.IdPost)
const {handleSubmit,reset,register}=useForm()
const navigate=useNavigate()


const submit=(data)=>{
    console.log(data)
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/My/${idPost}`
    axios.put(URL,data,tokenConfig())
    .then(res=>{console.log(res),
        navigate('/'),
        alert('Post actualizado correctamente')
    })
    .catch(res=>{console.log(res)
        alert('porfavor pasa el cursor de texto por cada imput')
    })
}



const getPost=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/ad/${idPost}`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data),
    setPost(res?.data?.Poust[0])
    })
    .catch(res=>console.log(res))
}
console.log(Post)
useEffect(() => {
  getPost()
}, [])



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
        
       
        <div className='titulo'><h1>Editar Post</h1></div>
        <form onSubmit={handleSubmit(submit)}>
            <ul >
                <li ><label htmlFor='register-tittle'>Titulo</label>
                    <input className='editedImput' type='text'id='register-tittle' defaultValue={Post?.tittle} {...register('tittle')} required></input>
                </li>

                <li><label htmlFor='resgister-content'>Contenido</label>
                    <input className='editedImput' type='text' id='resgister-content'defaultValue={Post?.content} {...register('content')} required></input>

                </li>
                <li><label htmlFor='register-URL'>URL de imagen(opcional)</label>
                    <input className='editedImput' type='text'id='register-URL'defaultValue={Post?.img} {...register('img')} required></input>
                    
                </li>
            </ul>
            
         
        <button>Actualizar Post</button>
        </form>
    </div>
  )
}

export default EditPost

