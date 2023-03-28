import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { store } from './state/store'

setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)