import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Practice from './assets/Components/Practice.jsx'
import Callback from './assets/Components/Callback.jsx'
import Googlemap from './assets/Components/Googlemap.jsx'
import Footer from './assets/Components/Footer.jsx'
import Footersecond from './assets/Components/Footersecond.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <Callback/>
    <Googlemap/>
    <Footer/>
    <Footersecond/>
  </React.StrictMode>,
)
