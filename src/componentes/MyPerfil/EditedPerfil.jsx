import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'

const EditedPerfil = () => {
const [User, setUser] = useState()
const navigate=useNavigate()
const {handleSubmit,register,reset}=useForm()
const submit=(data)=>{
    console.log(data)
console.log(User?.color1)
    const data2={
        name:data?.name?data?.name:User?.name,
        emeil:data?.emeil?data?.emeil:User?.emeil,
        age:data?.age?data?.age:User?.age,
        color1:data?.color1?data?.color1:User?.color1,
        color2:data?.color2?data?.color2:User?.color2
    }
    console.log(data2)
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.put(URL,data2,tokenConfig())
    .then(res=>{console.log(res),
        alert('Perfil Editado correctamente'),
        navigate('/MyPerfil')
    })
    .catch(res=>{console.log(res)
        alert('Porfavor presiona todos tus respuestas que enviaras')
    })
}

const getMyUser=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data),
    setUser(res.data.user)
    })
    .catch(res=>console.log(res))
}

useEffect(() => {
getMyUser()

}, [])




const toReturn=()=>{
    navigate('/MyPerfil')
}

  return (
    <div className='editedPost'>
              <div className='Postbutton'>
            <button onClick={toReturn}> 
            <img src='https://cdn-icons-png.flaticon.com/512/2099/2099190.png'
            />   REGRESEMOS</button>
            </div>  
        

              <form onSubmit={handleSubmit(submit)}>
            <ul>
                <li><label htmlFor='register-name'>Nombre</label>
                    <input className='editedImput' type='text'id='register-name' defaultValue={User?.name}  {...register('name')}></input>
                </li>

                <li><label htmlFor='resgister-age'>Edad</label>
                    <input className='editedImput' type='number'max={100} min={1} id='resgister-age' defaultValue={User?.age}{...register('age')}></input>

                </li>
                <li><label htmlFor='register-email'>Email</label>
                    <input className='editedImput' type='text'id='register-email'defaultValue={User?.emeil} {...register('emeil')}></input>
                </li>
                <li><label htmlFor='register-color1'>Color principal</label>
                    <input type='color'id='register-color1' defaultValue={User?.color1} {...register('color1')}></input>
                </li>
                <li><label htmlFor='register-color2'>Color secundario</label>
                    <input type='color' id='register-color2' defaultValue={User?.color1}{...register('color2')}></input>
                </li>
            </ul>
            <button>Actualizar</button>
        </form>
       
    </div>
  )
}

export default EditedPerfil