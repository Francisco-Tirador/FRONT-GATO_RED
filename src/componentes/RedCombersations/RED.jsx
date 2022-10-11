import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tokenConfig from '../../util/tokenConfig'
import Conversation from './Conversation'

const RED = () => {

const [Conversations, setConversations] = useState()
//? //////////////
const getREDconversations=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/My`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data)
    setConversations(res?.data)
    })
    .catch(res=>{console.log(res)})
}
// console.log(Combersations?.Red[0]?.id)
useEffect(() => {
 getREDconversations()
}, [])


console.log(Conversations?.Red[0])
  return (
    <div className='RED'>
      {
        Conversations?.Red[0]?
        Conversations?.Red?.map(Conver=>(
          <Conversation
          id={Conver.id}
          action={getREDconversations}
          combersationId={Conver?.combersationId}
          tittle={Conver?.combersation?.tittle}
          key={Conver.id}
          />
        )):
        <div className='contenidoInicio'><h2>NO HAY CONVERSACIONES AUN</h2></div>
      }
    </div>
  )
}

export default RED