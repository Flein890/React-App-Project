import {configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../redux/NavbarSlice';
import cartReducer from '../redux/cartMenuSlice';
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "../redux/categoriesSlice"

const reducers = combineReducers({
    navbar: navbarReducer,
    cart: cartReducer,
    categories: categoriesReducer  
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''], //agregar cart despues para persistir los datos
    
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