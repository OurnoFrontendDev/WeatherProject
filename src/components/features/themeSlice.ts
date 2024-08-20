import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ThemeState {
    theme: 'light' | 'dark';
}

const initialState: ThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action:PayloadAction<'light' | 'dark'> ) => {
            state.theme = action.payload;
            console.log("sdfsdf", state.theme = action.payload)
        },
        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const ThemeReducer = themeSlice.reducer;
export default ThemeReducer;