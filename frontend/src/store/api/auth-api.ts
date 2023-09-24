// https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#injecting-endpoints

import type {
  ApiLoginResponse,
  ApiRegisterResponse,
  LoginRequest,
  RegisterRequest,
} from '@/types';
import { baseApi } from './base-api';

const registerUrl = 'auth/register';
const loginUrl = 'auth/login';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ApiRegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: registerUrl,
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<ApiLoginResponse, LoginRequest>({
      query: (body) => ({
        url: loginUrl,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useRegisterMutation } = authApi;
