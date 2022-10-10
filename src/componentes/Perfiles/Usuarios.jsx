import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BarraPerfil from './BarraPerfil'

const Usuarios = () => {

    const [Usuarios, setUsuarios] = useState()

const getAllPoust=()=>{
    const URL="https://api-gato-red.onrender.com/api-gato-red/v1/users"
    axios.get(URL)
    .then(res=>{setUsuarios(res?.data?.users)})
    .catch(res=>{console.log(res?.data?.users)})
}

console.log(Usuarios)
useEffect(() => {
  getAllPoust()
  console.log('hola')
}, [])

  return (
    <div className='RED'>Usuarios
        {
            Usuarios?.map(User=>(
                <BarraPerfil
                id={User.id}
                key={User.id}
                />
            ))
        }

    </div>
  )
}

export default Usuarios