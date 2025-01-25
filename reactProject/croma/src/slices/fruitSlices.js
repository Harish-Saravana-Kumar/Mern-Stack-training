import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    efruits : []
}

export const fruitSlice = createSlice(
    {
        name : 'fruitSlice',
        initialState,
        reducers:{
            setFruit:(state,action)=>{
                state.efruits = [...state.efruits,action.payload]
            }
        }
    }
)

export const {setFruit} = fruitSlice.actions
export default fruitSlice.reducer