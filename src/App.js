import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
   <div>
    <Router>
    <Header />   
    <div>
    <Routes>
            <Route 
              path="/" 
              element={<Aboutme />}
            />
            <Route 
              path="/Portfolio" 
              element={<Portfolio />}
            />
            <Route 
              path="/Contact" 
              element={<Contact />}
            />
            <Route 
              path="/Resume"
              element={<Resume />}
            />
          </Routes>
    </div>
    </Router>
    <Footer />
    </div>
    );
  }
  
  export default App;