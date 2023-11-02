import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h2>wrong path 💩</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}


