import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import ResetCSS from './styles/ResetCSS.tsx'
import GlobalCSS from './styles/GlobalCSS.tsx'

import './styles/colors.css'
import './styles/spaces.css'
import './styles/typography.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalCSS />
    <App />
  </React.StrictMode>,
)
