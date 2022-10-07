import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

//? ////////////////////////////////////////
import { Provider } from 'react-redux' // nos envuelve la app para que los estados de redux puedan ser globales
import store from './store' //* al no especificar el archivo agarra cuaklquier archivo que sea index

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    {//*aqui envolvemos nuestra app con el provider y le pasamos la estore que contiene todos los estados que seran globales
    }<HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
)
