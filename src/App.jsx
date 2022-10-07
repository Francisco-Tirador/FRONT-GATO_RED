
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './componentes/singUp/Inicio'
import { Routes,Route,Link } from 'react-router-dom'
import Register from './componentes/singUp/Register'
import Home from './componentes/Home'
import Welcome from './componentes/singUp/Welcome'
import CreatePost from './componentes/Post/CreatePost'
import EditPost from './componentes/Post/EditPost'

function App() {

const getToken=localStorage.getItem('token')
  return (
    <div className="App">
      {
        getToken?
      <ul>
        <li><Link to="/">Login</Link></li>
      </ul>
      :''
}
    <Routes >
    <Route path='/' element={<Welcome/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Inicio' element={<Inicio/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/CreatePost' element={<CreatePost/>}/>
    <Route path='/EditMyPost' element={<EditPost/>}/>
    </Routes>
   
    </div>
  )
}

export default App
