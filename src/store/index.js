import {configureStore} from '@reduxjs/toolkit'
import idUser from './slice/idUser.slice'
import ComberID from './slice/ComberID.slice'

export default configureStore({
    reducer: {
        idUser,
        ComberID
    }          //*reducer son las accion como los estados
})

