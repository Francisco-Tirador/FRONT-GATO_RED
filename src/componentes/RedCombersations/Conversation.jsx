import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ConverID } from '../../store/slice/ConverID.slice'
import tokenConfig from '../../util/tokenConfig'

const Conversation = ({id,tittle,combersationId,action}) => {
const navigate=useNavigate()
const dispach=useDispatch()

const goToConversation=()=>{
    dispach(ConverID(combersationId))
    navigate('/Messages')
}

const deleteConversation=()=>{
  const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/My/${combersationId}`
  axios.delete(URL,tokenConfig())
  .then(res=>action())
  .catch(res=>console.log(res))
  
}
  return (
    <div className='conversations'>
        <h2>{tittle}</h2>
        <div >
            <button onClick={goToConversation}>GO to Messages</button>
            <button onClick={deleteConversation}>Borrar combersacion</button>
        </div>
    </div>
  )
}

export default Conversation