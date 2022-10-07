import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { idU } from '../../store/slice/idUser.slice'
import tokenConfig from '../../util/tokenConfig'


const TargetPost = ({id,action}) => {

const dispach=useDispatch()

    const [Post, setPost] = useState()
        const navigate=useNavigate()
        useEffect(() => {
          const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/ad/${id}`
          axios.get(URL,tokenConfig())
          .then(res=>{
          dispach(idU(res?.data?.Poust[0]?.id))
            setPost(res?.data?.Poust[0])
          })
        }, [])

    const borrarPost=()=>{
        const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/My/${id}`
        axios.delete(URL,tokenConfig())
        .then(res=>{console.log(res)
        action(res.data)
        })
        .catch(res=>console.log(res))
    }
    const upData=()=>{
        navigate('/EditMyPost')
    }
  return (
    <div><div>
         <h3>{Post?.tittle}</h3>
         <h4>{Post?.content}</h4>
         <img src={Post?.img} alt={`Poust del usuario ${Post?.user?.name}`} title={`Poust del usuario ${Post?.user?.name}`} />
         </div>
         
         <button onClick={borrarPost}>borrar</button>
         <button onClick={upData}>upDate</button>
    </div>
  )
}

export default TargetPost



