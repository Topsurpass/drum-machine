import {configureStore} from '@reduxjs/toolkit';
import drumPadReducer from './slice';
import drumPadReducer2 from './slice2';

export const store = configureStore({
    reducer:{
        playNow:drumPadReducer,
        playPiano:drumPadReducer2,
    }
})