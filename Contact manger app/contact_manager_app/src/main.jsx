import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './Store.js'
import {Provider} from "react-redux"
import React from 'react'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  // </React.StrictMode>,
)
