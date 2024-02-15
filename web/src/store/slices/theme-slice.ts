import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
  isDarkTheme: boolean;
};

const initialState: ThemeState = {
  isDarkTheme: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setDarkTheme: (state) => {
      state.isDarkTheme = true;
    },
    setLightTheme: (state) => {
      state.isDarkTheme = false;
    },
  },
});

export const { toggleDarkTheme, setDarkTheme, setLightTheme } =
  themeSlice.actions;

export const themeReducer = themeSlice.reducer;
