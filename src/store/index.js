import {configureStore} from '@reduxjs/toolkit'
import idUser from './slice/idUser.slice'

export default configureStore({
    reducer: {
        idUser
    }          //*reducer son las accion como los estados
})

