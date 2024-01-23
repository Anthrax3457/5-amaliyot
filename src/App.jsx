
import React, { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Routes from './Routes/routes'

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 5000, // Animatsiya davomiyligi (5 sekund)
      once: true,     // Animatsiyani bir marta bajarish
    });
  }, []);
  return (
    <div className="App">
        <Routes />
      </div>
  )
}

export default App