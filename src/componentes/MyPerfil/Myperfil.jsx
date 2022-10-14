import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { color1,color2 } from '../../util/Color1'
import tokenConfig from '../../util/tokenConfig'
import TargetPost from '../Post/TargetPost'
import EditedPerfil from './EditedPerfil'
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
    <div  className='contenidoInicio' >
        <div className='contentMyPerfil' style={color1()} >
            <div style={color1(User?.color1)} className='MyperfilConten'>
                <img className='iconPerfil' src={User?.imgPerfil?User?.imgPerfil:"https://cdn-icons-png.flaticon.com/512/2330/2330063.png"} />
                <div className='nameUser' style={color1()}><h1>{User?.name}</h1>
                <h2>Total de Publicaciones {User?.Pousts.length}</h2>
                </div>
               
                </div>
                <div className='config'>
                     <button onClick={edited}> <img className='icono' src="https://cdn-icons-png.flaticon.com/512/3730/3730451.png" alt="" /> Editar mi perfil</button>
                     <button onClick={deletedPerfil}> <img className='icono' src='https://cdn-icons-png.flaticon.com/512/3807/3807871.png' alt="" /> Eliminar mi perfil</button>
                </div>
                
        </div>
                
        
        <div className='contenidoInicio'>
            {
                User?.Pousts[0]?
                User?.Pousts?.map(Post=>(
                    <TargetPost
                 
                    id={Post.id}
                    key={Post.id}
                    />
                  ))
                  :null
                  }
        </div>

    </div>
  )
}

export default Myperfil