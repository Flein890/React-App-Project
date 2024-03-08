import {configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../redux/NavbarSlice';
import cartReducer from '../redux/cartMenuSlice';
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
    navbar: navbarReducer,
    cart: cartReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
reducer : persistedReducer,
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
}); 

export const persistor = persistStore(store);

export default store