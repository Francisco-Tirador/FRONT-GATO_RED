import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'

const EditedPerfil = () => {
const navigate=useNavigate()
const {handleSubmit,register,reset}=useForm()
const submit=(data)=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.put(URL,data,tokenConfig())
    .then(res=>{console.log(res),
        alert('Perfil Editado correctamente'),
        navigate('/MyPerfil')
    })
    .catch(res=>{console.log(res)})
}


const toReturn=()=>{
    navigate('/MyPerfil')
}

  return (
    <div>
              <form onSubmit={handleSubmit(submit)}>
            <ul>
                <li><label htmlFor='register-name'>Nombre</label>
                    <input type='text'id='register-name' {...register('name')}></input>
                </li>

                <li><label htmlFor='resgister-age'>Edad</label>
                    <input type='number'max={100} min={1} id='resgister-age' {...register('age')}></input>

                </li>
                <li><label htmlFor='register-email'>Email</label>
                    <input type='text'id='register-email' {...register('emeil')}></input>
                </li>
                <li><label htmlFor='register-color1'>Color principal</label>
                    <input type='color'id='register-color1' {...register('color1')}></input>
                </li>
                <li><label htmlFor='register-color2'>Color secundario</label>
                    <input type='color' id='register-color2' {...register('color2')}></input>
                </li>
            </ul>
            <button>Actualizar</button>
        </form>
        <button onClick={toReturn}>REGRESEMOS</button>
    </div>
  )
}

export default EditedPerfil