import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ComberID } from '../../store/slice/ComberID.slice'
import tokenConfig from '../../util/tokenConfig'

const Combersation = ({id,tittle,combersationId,action}) => {
const navigate=useNavigate()
const dispach=useDispatch()

const goToCombersation=()=>{
    dispach(ComberID(combersationId))
    navigate('/Messages')
}

const deleteCombersation=()=>{
  const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/My/${combersationId}`
  axios.delete(URL,tokenConfig())
  .then(res=>action())
  .catch(res=>console.log(res))
  
}
  return (
    <div>
        <h2>{tittle}</h2>
        <div>
            <button onClick={goToCombersation}>GO to Messages</button>
            <button onClick={deleteCombersation}>Borrar combersacion</button>
        </div>
    </div>
  )
}

export default Combersation