import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tokenConfig from '../../util/tokenConfig'

const BarraPerfil = ({id}) => {
const [User, setUser] = useState()
const [idComber, setidComber] = useState()
const Myid=localStorage.getItem('IdUser')
//? //////////////
const newRed2=()=>{
    const data={
        userId:Myid,
       combersationId:idComber
    }
    const URL2="https://api-gato-red.onrender.com/api-gato-red/v1/Red"
    axios.post(URL2,data,tokenConfig())
    .then(res=>{
        console.log(res?.data)
    })
    .catch(res=>console.log(res))
}
//? //////////////
const newRed=()=>{
    const data={
        userId:id,
       combersationId:idComber
    }

    console.log(data)
    const URL2="https://api-gato-red.onrender.com/api-gato-red/v1/Red"
    axios.post(URL2,data,tokenConfig())
    .then(res=>{
        newRed2()
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
        newRed()
    })
    .catch(res=>console.log(res))
}

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