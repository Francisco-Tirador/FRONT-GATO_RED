import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import tokenConfig from '../../util/tokenConfig'

const CreatePost = () => {

const {handleSubmit,reset,register}=useForm()

const submit=(data)=>{
    console.log(data)
    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/poust"
    axios.post(URL,data,tokenConfig())
    .then(res=>{console.log(res),
    console.log(data)
    })
    .catch(res=>console.log(res))
}

  return (
    <div >CreatePost
        <form onSubmit={handleSubmit(submit)}>
            <ul>
                <li><label htmlFor='register-tittle'>Titulo</label>
                    <input type='text'id='register-tittle' {...register('tittle')}></input>
                </li>

                <li><label htmlFor='resgister-content'>Contenido</label>
                    <input type='text' id='resgister-content' {...register('content')}></input>

                </li>
                {/* <li><label htmlFor='register-URL'>URL de imagen(opcional)</label>
                    <input type='text'id='register-URL' {...register('img')}></input>
                    
                </li> */}
            </ul>
            <button>Nuevo Post</button>
        </form>
    </div>
  )
}

export default CreatePost