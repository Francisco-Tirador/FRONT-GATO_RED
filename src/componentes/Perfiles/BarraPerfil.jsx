import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'

const BarraPerfil = ({id}) => {

const navigate=useNavigate()

const [User, setUser] = useState()
const [Render,setReder ] = useState()
const Myid=localStorage.getItem('IdUser')
//? //////////////
const newValidation=(red)=>{
    const data={
        User1:Myid,
        User2:id,
        Red:red
    }

    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/Red/validation"
    axios.post(URL,data,tokenConfig())
    .then(res=>console.log(res))
    .catch(res=>console.log(res))
}
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
        navigate('/RED')
        newRed(res?.data?.response?.id)
        newValidation(res?.data?.response?.id)
    })
    .catch(res=>console.log(res))
}

const validation=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/validation/${id}`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data?.response),
        setReder(res?.data?.response)
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
  validation(),
  getUser()
}, [])




  return Render?(
    <div className='conversations'>
        
        <h2>{User?.name} <img src='https://cdn-icons-png.flaticon.com/512/4543/4543765.png'/></h2>
        <div>
            <button onClick={newCombersation}>Enviar mensaje</button>
        </div>
    </div>
  ):''
  
}

export default BarraPerfil

