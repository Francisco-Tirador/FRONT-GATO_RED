import { createSlice } from "@reduxjs/toolkit";
export  const ConverIDslice=createSlice({
    name:'ConversationID',
    initialState:null,
    reducers:{
        ConverID:(res,state)=>state.payload
    }
}) 

export const {ConverID}=ConverIDslice.actions
export default ConverIDslice.reducer