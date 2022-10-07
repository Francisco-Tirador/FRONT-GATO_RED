import React, { useEffect, useState } from 'react'
import Home from '../Home'
import Inicio from './Inicio'

const Welcome = () => {

const [Token, setToken] = useState(false)

let tok=localStorage.getItem('token')
useEffect(() => {  
if(!tok){setToken(false)}
else{setToken(true)}

}, [tok])

  return (
    <div>
        {
            Token?<Home/>:<Inicio/>
        }
    </div>
  )
}

export default Welcome