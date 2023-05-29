import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter, Routes} from 'react-router-dom';
import { Base } from './routes/Login';
import './App.css'
import { Login } from './routes/Registrarse';
import { Inventario } from './routes/Inventario';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    
        <Route  path="/" element ={<Base/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Inventario" element={<Inventario/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
