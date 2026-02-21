import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Certificados from './pages/Certificados';
import Imparcialista from './pages/Imparcialista';
import VpsHostinger from './pages/VpsHostinger';
import Links from './pages/Links';
import Tutoriais from './pages/Tutoriais';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="hostinger-vps" element={<VpsHostinger />} />
          <Route path="imparcialista" element={<Imparcialista />} />
          <Route path="links" element={<Links />} />
          <Route path="tutoriais" element={<Tutoriais />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
