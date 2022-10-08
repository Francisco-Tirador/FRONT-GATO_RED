
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './componentes/singUp/Inicio'
import { Routes,Route,Link, useNavigate } from 'react-router-dom'
import Register from './componentes/singUp/Register'
import Home from './componentes/Home'
import Welcome from './componentes/singUp/Welcome'
import CreatePost from './componentes/Post/CreatePost'
import EditPost from './componentes/Post/EditPost'
import RED from './componentes/RedCombersations/RED'
import Usuarios from './componentes/Perfiles/Usuarios'
import Combersation from './componentes/RedCombersations/Combersation'
import Messages from './componentes/RedCombersations/Messages'
import Myperfil from './componentes/MyPerfil/Myperfil'
import EditedPerfil from './componentes/MyPerfil/EditedPerfil'

function App() {
const naviguete=useNavigate()
const getToken=localStorage.getItem('token')
const CloseSession=()=>{
  localStorage.clear('toke')
  localStorage.clear('IdUser')
  naviguete('/')
}


  return (
    <div className="App">
      {
        getToken?
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CreatePost">Crear Post</Link></li>
        <li><Link to="/RED">Combersaciones</Link></li>
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
    <Route path='/Inicio' element={<Inicio/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/CreatePost' element={<CreatePost/>}/>
    <Route path='/EditMyPost' element={<EditPost/>}/>
    <Route path='/RED' element={<RED/>}/>
    <Route path='/Perfiles' element={<Usuarios/>}/>
    <Route path='/Combersation' element={<Combersation/>}/>
    <Route path='/Myperfil' element={<Myperfil/>}/>
    <Route path='/Messages' element={<Messages/>}/>
    <Route path='/EditedPerfil' element={<EditedPerfil/>}/>
    </Routes>
   
    </div>
  )
}

export default App
