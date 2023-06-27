// App.js
import React from 'react';
import './App.css';
import { HashRouter , Route , Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;