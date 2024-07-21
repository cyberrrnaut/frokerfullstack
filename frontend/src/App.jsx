
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Pageone } from './pages/Pageone';
import { Pagetwo } from './pages/Pagetwo';
import { Pagethree } from './pages/Pagethree';
import { Pagefour } from './pages/Pagefour';
import { Pagefive } from './pages/Pagefive';
import { Pagesix } from './pages/Pagesix';
import { Footer } from './components/Footer';
import { Pageseven } from './pages/Pageseven';
import { Pageeight } from './pages/pageeight';



function App() {
  return (
    <Router>
      <Navbar />

      <Pageone />
        
        <Pagetwo />
        <Pagethree/>
        <Pagefour/>
        <Pagefive/>
        <Pagesix/>
         <Pageseven/>
         <Pageeight/>


      <Routes >

      
        

      </Routes>

       <Footer/>
    </Router>
  );
}

export default App
