import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { color1,color2 } from '../../util/Color1'
import tokenConfig from '../../util/tokenConfig'
import TargetPost from '../Post/TargetPost'
const Myperfil = () => {

const [User, setUser] = useState()
const navigate=useNavigate()

const getUser=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data)
        setUser(res.data.user)
    })
    .catch(res=>console.log(res))
}

//se va a desplegar una barra redondeada con el nombre en grande del usuario

useEffect(() => {
 getUser()
}, [])

const edited=()=>{
    navigate('/EditedPerfil')
}

const deletedPerfil=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.delete(res=>{console.log('perfil Eliminado')
    localStorage.clear('token'),
    localStorage.clear('IdUser')
    navigate('/')
})
}

  return (
    <div style={color1(User?.color2)}>
        <div className='BarraUsuario'style={color1(User?.color1)} >
            <div style={color1(User?.color2)} className='Iconperfil'>Icon</div>
            <div style={color1(User?.color1)}>{User?.name}</div>
            <h2>Total de Publicaciones {User?.Pousts.length}</h2>
            <div style={color1(User?.color2)}>
            <button style={color1(User?.color1)} onClick={edited}>Editar perfil</button>
            <button style={color1(User?.color1)} onClick={deletedPerfil} >Eliminar perfil</button>
            </div>
        </div>
        <div style={color1(User?.color2)}>
            {
                User?.Pousts?
                    User?.Pousts?.map(Post=>(
                        <TargetPost
                        id={Post.id}
                        key={Post.id}
                        />
                    )):
                    <div>No hay Post</div>
                    
            }
        </div>

    </div>
  )
}

export default Myperfil