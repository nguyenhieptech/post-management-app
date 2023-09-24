// https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics
// https://redux-toolkit.js.org/rtk-query/usage/code-splitting

import { RootState } from '@/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/api/',
    prepareHeaders: async (headers, { getState }) => {
      const accessToken = (getState() as RootState).auth.token;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Auth', 'Posts'],
});
