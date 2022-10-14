import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import tokenConfig from '../util/tokenConfig'
import ButtonIcon from './ButtonIcon'

const AnimacionConfig = () => {
const navigate=useNavigate()
const {handleSubmit,register}=useForm()
const [User, setUser] = useState()

const Buttons=[
    {id:'1',url:'https://cdn-icons-png.flaticon.com/512/2330/2330081.png'},
    {id:'2',url:'https://cdn-icons-png.flaticon.com/512/2330/2330063.png'},
    {id:'3',url:'https://cdn-icons-png.flaticon.com/512/2330/2330084.png'},
    {id:'4',url:'https://cdn-icons-png.flaticon.com/512/2330/2330061.png'},
    {id:'5',url:'https://cdn-icons-png.flaticon.com/512/2330/2330059.png'},
    {id:'6',url:'https://cdn-icons-png.flaticon.com/512/2330/2330077.png'},
    {id:'7',url:'https://cdn-icons-png.flaticon.com/512/2330/2330053.png'},
    {id:'8',url:'https://cdn-icons-png.flaticon.com/512/2330/2330083.png'},
    {id:'9',url:'https://cdn-icons-png.flaticon.com/512/2330/2330075.png'},
    {id:'10',url:'https://cdn-icons-png.flaticon.com/512/2330/2330085.png'},
    {id:'11',url:'https://cdn-icons-png.flaticon.com/512/2330/2330066.png'},
    {id:'12',url:'https://cdn-icons-png.flaticon.com/512/2330/2330069.png'},
    {id:'13',url:'https://cdn-icons-png.flaticon.com/512/2330/2330037.png'},
    {id:'14',url:'https://cdn-icons-png.flaticon.com/512/2330/2330045.png'},
    {id:'15',url:'https://cdn-icons-png.flaticon.com/512/2330/2330082.png'},
]


const getUser=()=>{
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.get(URL,tokenConfig())
    .then(res=>{
        setUser(res.data.user)
        
    }) 
}

const submit=(data)=>{
    const Icon=localStorage.getItem('Icon')
    const dataFinal={
        name:User?.name,
        age:User?.age,
        emeil:User?.emeil,
        color1:data.color1==="#000000"||undefined?User?.color1:data.color1,
        color2:data.color2==="#000000"||undefined?User?.color2:data.color2,
        imgPerfil:Icon?Icon:User?.imgPerfil
    }
    
    console.log(Icon)
    const URL=`https://api-gato-red.onrender.com/api-gato-red/v1/users/My`
    axios.put(URL,dataFinal,tokenConfig())
    .then(res=>{
        console.log('All ok'),
        localStorage.setItem('config','All ok')
        navigate('/')
    })
    .catch(res=>console.log(res))
  
}
const [Token, setToken] = useState(false)

let tok=()=>{localStorage.getItem('Icon'),console.log('par')}


useEffect(() => {
    getUser()
}, [tok])

  return (
    <div className='animacionConfig'>
        <div className='brillo'>
        <div className='cuadro'>
            <button onClick={tok}>ds</button>
            <div className='titulo'><h2>Hola quieres cambiar tu icono o colores favoritos el dia de hoy?</h2></div>
            <div>
                <div>
                 {Buttons.map(Butt=>(
                    <ButtonIcon
                    id={Butt.id}
                    URL={Butt.url}
                    key={Butt.id}
                    />
                 ))}
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <li><label htmlFor="register-Color1">Color principal</label>
                    <input type="color" id='register-Color1' {...register('color1')}/>
                    </li>

                    <li><label htmlFor="register-Color2">Color Secundario</label>
                    <input type="color" id='register-Color2'{...register('color2')}/>
                    </li>
                    <button>Actualizar</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AnimacionConfig


