import { ApiLoginResponse, ApiRegisterResponse } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AuthStateSlice = {
  isLoggedIn: boolean;
  token: string | null;
  userInfo: {
    id: number | string;
    email: string | null;
  } | null;
};

const initialState: AuthStateSlice = {
  isLoggedIn: false,
  token: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userInfo = null;
    },
    /** Set user info and token after signing in successfully */
    login: (state, action: PayloadAction<ApiLoginResponse>) => {
      state.token = action.payload.access_token;
      state.userInfo = action.payload.user_info;
      state.isLoggedIn = true;
    },
    register: (state, action: PayloadAction<ApiRegisterResponse>) => {
      state.token = action.payload.access_token;
      state.userInfo = action.payload.user_info;
      state.isLoggedIn = true;
    },
    setSignedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export const authReducer = authSlice.reducer;
