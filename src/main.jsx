import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ChatApp from './ChatApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatApp/>
  </StrictMode>,
)
