import axios from 'axios'
import React, { useEffect } from 'react'
import tokenConfig from '../../util/tokenConfig'

const RED = () => {

const getREDcombersations=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Red/My`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data)})
    .catch(res=>{console.log(res)})
}

useEffect(() => {
 getREDcombersations()
}, [])


  return (
    <div>RED</div>
  )
}

export default RED