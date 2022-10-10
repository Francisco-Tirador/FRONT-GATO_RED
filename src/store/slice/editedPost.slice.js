import {createSlice} from '@reduxjs/toolkit'

export const IdPostSlice=createSlice({
    name:'IdPost',
    initialState:null,
    reducers:{
        IdPost:(obj,state)=>state.payload
    }
    
})

export const{IdPost}=IdPostSlice.actions
export default IdPostSlice.reducer