
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
      {
        getToken?
      <ul>
        <li><NavLink className={({isActive})=>isActive?'active':''} to="/">Inicio</NavLink></li>
        <li><Link to="/CreatePost">Crear Post</Link></li>
        <li><Link to="/RED">Conversaciones</Link></li>
        <li><Link to="/Perfiles">Agregar Amigo</Link></li>
        <li><Link to="/Myperfil">Ver tu perfil</Link></li>
        <li><button onClick={CloseSession}>Salir</button></li>
        
      </ul>
      :''
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




    </div>
  )
}

export default App
