import {createSlice} from '@reduxjs/toolkit'

export const idUserSlice=createSlice({
    name:'idUser',
    initialState:'hola soy global',
    reducers:{
        idU:(res,state)=>state.payload
    }
})
export const {idU}=idUserSlice.actions
export default idUserSlice.reducer