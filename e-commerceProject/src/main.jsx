import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShopProvider from './context/ShopContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <App />
  </ShopProvider>
  </StrictMode>,
)
