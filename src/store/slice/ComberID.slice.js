import { createSlice } from "@reduxjs/toolkit";
export  const ComberIDslice=createSlice({
    name:'CombersationID',
    initialState:null,
    reducers:{
        ComberID:(res,state)=>state.payload
    }
}) 

export const {ComberID}=ComberIDslice.actions
export default ComberIDslice.reducer