import { createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"jhon",
        email:"sh@email.com",
    },
    reducers:{
        update:(state, action)=>{
            state.name=action.payload.name;
            state.email= action.payload.email;
        },
        removeItem: (state)=>{
            
                state.name="";
                state.email=" ";
                console.log(state)
            
        },
    },
})

export const {update, removeItem} =userSlice.actions;
export default userSlice.reducer;