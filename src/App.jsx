
import './App.css'
import Inicio from './componentes/singUp/Inicio'
import { Routes,Route,Link, useNavigate, NavLink } from 'react-router-dom'
import Register from './componentes/singUp/Register'
import Home from './componentes/Home'
import Welcome from './componentes/singUp/Welcome'
import CreatePost from './componentes/Post/CreatePost'
import EditPost from './componentes/Post/EditPost'
import RED from './componentes/RedCombersations/RED'
import Usuarios from './componentes/Perfiles/Usuarios'
import Conversation from './componentes/RedCombersations/Conversation'
import Messages from './componentes/RedCombersations/Messages'
import Myperfil from './componentes/MyPerfil/Myperfil'
import EditedPerfil from './componentes/MyPerfil/EditedPerfil'
import ProtectedRoutes from './componentes/ProtectedRoutes'
import Footer from './componentes/Footer'

function App() {
const naviguete=useNavigate()
const getToken=localStorage.getItem('token')
const CloseSession=()=>{
  localStorage.clear('toke')
  localStorage.clear('IdUser')
  naviguete('/')
}

//TODO-- Con navLikn podemos dar estilo a la ruta de donde estamos , recibe espesificamente isActive lo llamamos en un callback
  return (
    <div className="App">
      <div className='head'>
        <h1>GATO RED <img src="https://cdn-icons-png.flaticon.com/512/6855/6855215.png" alt="" /></h1>
      </div>

      {
        
        getToken?
        <div className='Nav'>
      <ul>
        <li><NavLink className={({isActive})=>isActive?'active':''} to="/"><img className='icono' src="https://cdn-icons-png.flaticon.com/512/871/871821.png"  /> PRINCIPAL</NavLink></li>
        <li><Link to="/Myperfil"><img src="https://cdn-icons-png.flaticon.com/512/875/875610.png" className='icono'  /> Ver tu perfil </Link></li>
        <li><Link to="/CreatePost"><img className='icono' src="https://cdn-icons-png.flaticon.com/512/1160/1160758.png" /> Crear Post </Link></li>
        <li><Link to="/RED"><img className='icono' src="https://cdn-icons-png.flaticon.com/512/875/875500.png" /> Conversaciones </Link></li>
        <li><Link to="/Perfiles"><img src="https://cdn-icons-png.flaticon.com/512/875/875541.png" className='icono' /> Agregar Amigo </Link></li>
        <li><button onClick={CloseSession}>Salir</button></li>
        
      </ul>
      </div>
      :null
      
}

       
{/* <Combersation/> */}
    <Routes >
    <Route path='/' element={<Welcome/>}/>
    <Route path='/Register' element={<Register/>}/>
  <Route element={<ProtectedRoutes token={getToken}/>}>
    <Route path='/Inicio' element={<Inicio/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/CreatePost' element={<CreatePost/>}/>
    <Route path='/EditMyPost' element={<EditPost/>}/>
    <Route path='/RED' element={<RED/>}/>
    <Route path='/Perfiles' element={<Usuarios/>}/>
    <Route path='/Conversation' element={<Conversation/>}/>
    <Route path='/Myperfil' element={<Myperfil/>}/>
    <Route path='/Messages' element={<Messages/>}/>
    <Route path='/EditedPerfil' element={<EditedPerfil/>}/>
    </Route>
    </Routes>
{/*    
//* Podemos condicionar el renderizado de las rutas con rutas anidadas y dandole un id a cada elemento
//*como tipo id params si te interesa ve la clase xD yo no quise poner mucha atencio, pero tal vez te interese en el futuro xD 
*/}



<Footer/>
    </div>
  )
}

export default App
