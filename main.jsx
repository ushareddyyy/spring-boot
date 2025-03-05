import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Laptops from './Laptops.jsx'

createRoot(document.getElementById('root')).render(
  <Laptops></Laptops>
)
