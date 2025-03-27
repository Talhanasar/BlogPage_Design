import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/blog.css'

// Add Font Awesome for icons
const fontAwesomeScript = document.createElement('link')
fontAwesomeScript.rel = 'stylesheet'
fontAwesomeScript.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(fontAwesomeScript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
