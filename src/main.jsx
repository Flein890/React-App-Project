import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { persistor } from './store/store.js';
import  {PersistGate} from "redux-persist/integration/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App/>
      </PersistGate>    
    </Provider>
  </React.StrictMode>
)
