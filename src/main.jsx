import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import Google Fonts
import '@fontsource/nanum-gothic'
import '@fontsource/open-sans'
import '@fontsource/noto-sans'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)