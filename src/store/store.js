import {configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../redux/NavbarSlice';
import cartReducer from '../redux/cartMenuSlice';
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "../redux/categoriesSlice"
import modalReducer from '../redux/modalSlice'
import addReducer from '../redux/addSlice'
import productModalReducer from '../redux/productModal'
import userReducer from '../redux/userSlice'
import codeSliceReducer  from "../redux/codeSlice";

//importar bien los reducers

const reducers = combineReducers({
    navbar: navbarReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    modal:modalReducer,
    add: addReducer,
    productModal: productModalReducer,
    user: userReducer,
    codeState: codeSliceReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','user'], //agregar para persistir los datos
    
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
//funciones reductoras
reducer : persistedReducer,
//middlewares
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
}); 

export const persistor = persistStore(store);

export default store