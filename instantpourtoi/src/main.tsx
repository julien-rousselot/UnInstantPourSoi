import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App/App.tsx'
import './reset.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)