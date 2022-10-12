import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { color2 } from '../../util/Color1'
import tokenConfig from '../../util/tokenConfig'

const ModelMessage = ({IdUser,id,content,img}) => {
const idUser=localStorage.getItem('IdUser')
const [User, setUser] = useState()
const getUser=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/ad/${IdUser}`
    axios.get(URL,tokenConfig())
    .then(res=>setUser(res.data.user))
}
useEffect(() => {
   getUser()
}, [])


const deleteMessage=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Message/${id}`
    axios.delete(URL,tokenConfig())
    .then(res=>{console.log('ALL ok')
        alert('Mensaje borrado exitosamente')
})
    .catch(res=>console.log(res))
}


  return (
    <div  className='Mensaje'style={color2(User?.color1)}>
    <div className='content'>
        <p>{User?.name}</p>
        <h3 >{content}</h3>
        {
            User?.id===idUser?
 <div className='buttonM'>
 <img className='icono ' onClick={deleteMessage} src="https://cdn-icons-png.flaticon.com/512/7666/7666109.png" title='Borrar mensaje' />
 </div>:null

        }
    </div>
     </div>
  )
}

export default ModelMessage