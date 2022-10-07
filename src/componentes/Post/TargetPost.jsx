import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'


const TargetPost = ({id,action}) => {

    const [Post, setPost] = useState()
        const navigate=useNavigate()
        useEffect(() => {
          const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/ad/${id}`
          axios.get(URL,tokenConfig())
          .then(res=>{
          Set
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
         </div>
         
         <button onClick={borrarPost}>borrar</button>
         <button onClick={upData}>upDate</button>
    </div>
  )
}

export default TargetPost



