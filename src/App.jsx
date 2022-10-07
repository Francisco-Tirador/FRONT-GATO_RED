
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './componentes/singUp/Inicio'
import { Routes,Route,Link } from 'react-router-dom'
import Register from './componentes/singUp/Register'
import Home from './componentes/Home'
import Welcome from './componentes/singUp/Welcome'
import CreatePost from './componentes/Post/CreatePost'
import EditPost from './componentes/Post/EditPost'
import RED from './componentes/RedCombersations/RED'
import Usuarios from './componentes/Perfiles/Usuarios'
import Combersation from './componentes/RedCombersations/Combersation'
import Messages from './componentes/RedCombersations/Messages'

function App() {

const getToken=localStorage.getItem('token')
  return (
    <div className="App">
      {
        getToken?
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/CreatePost">Crear Post</Link></li>
        <li><Link to="/RED">Combersaciones</Link></li>
        <li><Link to="/Perfiles">Agregar Amigo</Link></li>
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
    <Route path='/Messages' element={<Messages/>}/>
    </Routes>
   
    </div>
  )
}

export default App
