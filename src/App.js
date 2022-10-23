import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './layout/Footer';
import Header from './layout/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
function App() {
  return (
    <div className='retive'>
    

      
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>

    </Router>


    </div>
  );
}

export default App;
