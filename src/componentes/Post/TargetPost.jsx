import axios from 'axios'
import React, { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IdPost } from '../../store/slice/editedPost.slice'
import tokenConfig from '../../util/tokenConfig'


const TargetPost = ({id,action}) => {
  const idUSer=localStorage.getItem('IdUser')
const [Text, setText] = useState(false)
const dispach=useDispatch()

    const [Post, setPost] = useState()
        const navigate=useNavigate()
        useEffect(() => {
          const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/poust/ad/${id}`
          axios.get(URL,tokenConfig())
          .then(res=>{
          dispach(IdPost(id))
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
        dispach(IdPost(id))
    }
    const textView=()=>{
      if(Text===false){
        setText(true)
      }else{setText(false)}
    }
console.log(Post)    

  return (
    <div className='targetPost'>
      <div className='contenido'>
          <h3><b>{Post?.user.name}</b> </h3>
         <h4>{Post?.tittle}</h4>
         <div className='textPost'>{
          Post?.content.length>200?
          <p>{Text?Post?.content:Post?.content.substring(0, 200)}<b onClick={textView}>{Text? '     ver menos':'  ver mas ...'}</b></p>
          :<p>{Post?.content}</p>

         }
          
         </div>
         
         {
          Post?.img?
          <img className='imgPost' src={Post?.img} alt={`Poust del usuario ${Post?.user?.name}`} title={`Poust del usuario ${Post?.user?.name}`} />
          :undefined
         }
        
         </div>
         {
          idUSer===Post?.userId?
          <div className='botones'>
         <button onClick={borrarPost}><img src='https://cdn-icons-png.flaticon.com/512/1828/1828599.png' title='Borrar este post'/></button>
         <button onClick={upData}><img src='https://cdn-icons-png.flaticon.com/512/8384/8384470.png' title='Actualizar este post'/></button>
         </div>
         :null
         }
              
    </div>
  )
}

export default TargetPost



