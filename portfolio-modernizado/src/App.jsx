import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Certificados from './pages/Certificados';
import Imparcialista from './pages/Imparcialista';
import VpsHostinger from './pages/VpsHostinger';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="hostinger-vps" element={<VpsHostinger />} />
          <Route path="imparcialista" element={<Imparcialista />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
