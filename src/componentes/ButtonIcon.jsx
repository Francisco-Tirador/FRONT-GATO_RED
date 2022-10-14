import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tokenConfig from '../util/tokenConfig'

const ButtonIcon = ({URL}) => {

const ib= localStorage.getItem('Icon')
const clas=()=>{
    if(ib===URL){return 'toggle'}
    else{return ''}
}
const submit=()=>{
   
 localStorage.setItem('Icon',URL)
 clas()
}
 

  return (
    <button onClick={submit} className={clas()}>
        <img src={URL} tittle='Icono de perfil'/>
    </button>
  )
}

export default ButtonIcon