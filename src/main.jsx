import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-2xl mx-auto'>
   <App />
   </div>
  </StrictMode>,
)
