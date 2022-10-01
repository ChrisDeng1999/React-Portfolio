import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Footer from './components/Footer';
import Header from './components/Header';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
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
              path="/Experience" 
              element={<Experience />}
            />
            <Route 
              path="/Projects" 
              element={<Projects />}
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