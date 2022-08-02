import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  ApolloProvider } from '@apollo/client';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <Header />   
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
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
    </ApolloProvider>
    );
  }
  
  export default App;