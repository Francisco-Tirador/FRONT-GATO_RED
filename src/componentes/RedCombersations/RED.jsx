import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tokenConfig from '../../util/tokenConfig'
import Combersation from './Combersation'

const RED = () => {

const [Combersations, setCombersations] = useState()
//? //////////////
const getREDcombersations=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/My`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data)
    setCombersations(res?.data)
    })
    .catch(res=>{console.log(res)})
}
// console.log(Combersations?.Red[0]?.id)
useEffect(() => {
 getREDcombersations()
}, [])



  return (
    <div>
      {
        Combersations?
        Combersations?.Red?.map(Comber=>(
          <Combersation
          id={Comber.id}
          action={getREDcombersations}
          combersationId={Comber?.combersationId}
          tittle={Comber?.combersation?.tittle}
          key={Comber.id}
          />
        )):
        <div>No hay combersaciones</div>
      }
    </div>
  )
}

export default RED