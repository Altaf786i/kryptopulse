import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoAPI } from "../services/cryptoApi";
import { exchangeApi } from "../services/exchangeApi";
export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [exchangeApi.reducerPath]: exchangeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cryptoAPI.middleware)
            .concat(exchangeApi.middleware),
        
});
