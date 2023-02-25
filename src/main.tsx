import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'normalize.css'

import App from '@/App'
import store from './store'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
