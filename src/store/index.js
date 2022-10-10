import {configureStore} from '@reduxjs/toolkit'
import idUser from './slice/idUser.slice'
import ConverID from './slice/ConverID.slice'
import IdPost from './slice/editedPost.slice'

export default configureStore({
    reducer: {
        idUser,
        ConverID,
        IdPost
    }          //*reducer son las accion como los estados
})

