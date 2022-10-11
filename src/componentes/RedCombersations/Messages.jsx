import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../../util/tokenConfig'
import ModelMessage from './ModelMessage'

const Messages = () => {
const {handleSubmit,register,reset}=useForm()
const navigate=useNavigate()
const [Messages, setMessages] = useState()
const [URL, setURL] = useState(false)


const idConver=useSelector(res=>res.ConverID)
const idMy=useSelector(res=>res.IdUser)

console.log(idConver)
const getMessages=()=>{
    
    console.log('hola')
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Comber/${idConver}`
    axios.get(URL,tokenConfig())
    .then(res=>{console.log(res.data.response)
        setMessages(res?.data?.response[0])
        })
    .catch(res=>console.log(res.data))
   
}
const ToReturn=()=>{
    navigate('/RED')
}


useEffect(() => {
    if(idConver){
       console.log(idConver)
    getMessages()
    }else{
        console.log(idConver)
        ToReturn()
    }
    }, [Messages])
    console.log(Messages)

const submit=(data)=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/Message/${idConver}`
    axios.post(URL,data,tokenConfig())
    .then(res=>{console.log(res.data),
    reset({
        content:''
    })
    })
    .catch(res=>console.log(res))
}


const ButtonURL=()=>{
    if(URL){
        setURL(false)
    }else{
        setURL(true)
    }
}



  return (
    <div className='ContenMensajes'>
        <div>
            <h1>{Messages?.tittle}</h1>
        </div>
        <div>
            {
                Messages?.messeges[0]?
                Messages?.messeges?.map(Messa=>(
                    <ModelMessage
                    content={Messa.content}
                    img={Messa.img}
                    IdUser={Messa.userId}
                    id={Messa.id}
                    key={Messa.id}
                    />
                )):
                <div><h2>No hay mensajes aun C:</h2></div>
            }
            
        </div>
        <div className='BarraMensaje'>
                <form onSubmit={handleSubmit(submit)}>
                    <ul>
                    <li><label htmlFor='register-text'></label>
                    <input type='text' placeholder='Mensaje' id='register-text' 
                        {...register('content')}></input>
                    </li>
                    {
                        URL?
                    <li>
                        <label htmlFor='register-URL'></label>
                    <input type='text' placeholder='URL para añadir a mensaje' id='register-URL' 
                        {...register('img')}></input>
                    </li>:
                    ""
                        }
                    </ul>
                    <button>Enviar</button>
                </form>
                <button onClick={ButtonURL}>Añadir imagen</button>
            </div>
    </div>
  )
}

export default Messages