import { configureStore } from '@reduxjs/toolkit';
import pinReducer from './action/pinReducer';

export const store = configureStore({
    reducer: {
        pin: pinReducer,
    },
});
