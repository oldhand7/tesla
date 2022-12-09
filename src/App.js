import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import TechSpec from './components/TechSpec/TechSpec';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<ContactUs/>}/>
          <Route path="/TechnicalSpecification" element={<TechSpec/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
