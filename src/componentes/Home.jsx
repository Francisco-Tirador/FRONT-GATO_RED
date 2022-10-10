import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TargetPost from './Post/TargetPost'
import Inicio from './singUp/Inicio'

const Home = () => {
//! como utilizar redux
//Todo / creamos una contante donde ejecutaremos useSelector y le pasamos una funcion donde mandamos a llamar el reducer de la store con el nombre que espesificamos en el console.log() nos da el estado
const EstadoGlobal=useSelector(res=>res.idUser)
console.log(EstadoGlobal)
//!

const [Recarga, setRecarga] = useState()
const [Poust, setPoust] = useState()
const navigate=useNavigate()

const createPost=()=>{
  navigate('/CreatePost')
}


const ALlPost=()=>{
  const URL="https://api-gato-red.onrender.com/api-gato-red/v1/poust"
axios.get(URL)
.then(async res=>{
  setPoust(res.data)
 })
.catch(res=>console.log(res))
}



useEffect(() => {
ALlPost()
},[])



  return (
    <div className=''>
      <button onClick={createPost}>Crear Post</button>

      <div className='contenidoInicio'>
      {
        Poust?.Poust[0]?
        Poust?.Poust?.map(Post=>(
          <TargetPost
          action={setRecarga}
          id={Post.id}
          key={Post.id}
          />
        ))
        :
        <div>Aun no hay ningin Post</div>
      }
      </div>
    </div>
  )
}

export default Home