import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'

const BarraPerfil = ({id}) => {

const navigate=useNavigate()

const [User, setUser] = useState()
const [idComber, setidComber] = useState()
const Myid=localStorage.getItem('IdUser')
//? //////////////
const newRed2=(masPotente)=>{
   
    const data={
        userId:Myid,
       combersationId:masPotente
    }
    console.log(data)
    const URL2="https://api-gato-red.onrender.com/api-gato-red/v1/Red"
    axios.post(URL2,data,tokenConfig())
    .then(res=>{
        console.log(res?.data)
        navigate('/RED')
    })
    .catch(res=>console.log(res))
}
//? //////////////
const newRed=(masRapido)=>{
    const data={
        userId:id,
       combersationId:masRapido
    }

    console.log(data)
    const URL2="https://api-gato-red.onrender.com/api-gato-red/v1/Red"
    axios.post(URL2,data,tokenConfig())
    .then(res=>{
        console.log(res.data)
        newRed2(res?.data?.response?.combersationId)
    })
    .catch(res=>console.log(res))
}
//? //////////////
const newCombersation=()=>{
    const data={tittle:User?.name}
    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/Comber"
    axios.post(URL,data,tokenConfig())
    .then(res=>{
     
        setidComber(res?.data?.response?.id),
        console.log(res?.data?.response?.id),
        newRed(res?.data?.response?.id)
    })
    .catch(res=>console.log(res))
}

// const verificarComber=()=>{
//     const URL=
// }


const getUser=()=>{
    
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/ad/${id}`
    axios.get(URL,tokenConfig())
    .then(res=>{
        console.log(res.data),
        setUser(res?.data?.user)
    })
    .catch(res=>console.log(res))
}
useEffect(() => {
  getUser()
}, [])





  return (
    <div>
        <h2>{User?.name}</h2>
        <div>
            <button onClick={newCombersation}>Enviar mensaje</button>
        </div>
    </div>
  )
}

export default BarraPerfil