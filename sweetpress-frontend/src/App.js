import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <Homepage />
    // </div>
    <>
      <BrowserRouter>
      <div className='straighten_container'>
      <div className = 'logo_container'>
      <h2>Sweet Press</h2>
      <p>Sugarcane Juice</p>
      </div>
        <div className='nav_container'>
          <div style={{ margin: '10px', fontSize: '25px'}}>
            <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'tomato' : 'black', fontWeight: isActive ? '700' : 'lighter' })}>
              Home
            </NavLink>
          </div>
          <div style={{ margin: '10px', fontSize: '25px' }}>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'tomato' : 'black', fontWeight: isActive ? '700' : 'lighter'  })}>
              About
            </NavLink>
          </div>
          <div style={{ margin: '10px', fontSize: '25px' }}>
          <NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? 'tomato' : 'black', fontWeight: isActive ? '700' : 'lighter'  })}>
            Menu
          </NavLink>
        </div>
          <div style={{ margin: '10px', fontSize: '25px' }}>
            <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'tomato' : 'black', fontWeight: isActive ? '700' : 'lighter'  })}>
              Contact
            </NavLink>
          </div>
          </div>
        </div>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
