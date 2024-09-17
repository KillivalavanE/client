import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
    isSideBarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState : InitialState = {
    isSideBarCollapsed:false,
    isDarkMode:false
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSideBarCollapsed: (state,action: PayloadAction<boolean>) =>{
            state.isSideBarCollapsed=action.payload
        },
        setIsDarkMode: (state,action: PayloadAction<boolean>) =>{
            state.isDarkMode=action.payload
        }
    }
})

export const {setIsSideBarCollapsed,setIsDarkMode}=globalSlice.actions

export default globalSlice.reducer