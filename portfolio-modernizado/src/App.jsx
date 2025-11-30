import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Certificados from './pages/Certificados';
import Tutoriais from './pages/Tutoriais';
import Links from './pages/Links';
import Code from './pages/Code';
import Imparcialista from './pages/Imparcialista';
import VpsHostinger from './pages/VpsHostinger';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="tutoriais" element={<Tutoriais />} />
          <Route path="links" element={<Links />} />
          <Route path="hostinger-vps" element={<VpsHostinger />} />
          <Route path="code" element={<Code />} />
          <Route path="imparcialista" element={<Imparcialista />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
