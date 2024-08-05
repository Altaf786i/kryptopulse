// services/exchangeApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coincap.io/v2';

const createRequest = (url) => ({ url });

export const exchangeApi = createApi({
    reducerPath: 'exchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

export const { useGetExchangesQuery } = exchangeApi;
