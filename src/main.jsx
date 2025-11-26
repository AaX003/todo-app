import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Todo from './app/Todo' // new component imported from app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
