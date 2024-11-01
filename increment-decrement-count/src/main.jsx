import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Incdec from './Incdec.jsx'
import CricketScore from './CricketScore.jsx'
import Apple from './Apple.jsx'
import PriceDiscount from './PriceDiscount.jsx'
import Greeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Incdec />
    <CricketScore />
    <Apple />
    <PriceDiscount />
    <Greeting />
  </StrictMode>,
)
