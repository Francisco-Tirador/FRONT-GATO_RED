import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tokenConfig from '../../util/tokenConfig'

const ModelMessage = ({IdUser,id,content,img}) => {
const [NameUser, setNameUser] = useState()
const getUser=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/ad/${IdUser}`
    axios.get(URL,tokenConfig())
    .then(res=>setNameUser(res.data.user.name))
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
    <div>
    <div>
        <h3>{content}</h3>
        <p>{NameUser}</p>
    </div>
        <button onClick={deleteMessage}>Delete Message</button>
    </div>
  )
}

export default ModelMessage