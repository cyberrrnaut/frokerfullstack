
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Aboutus } from './pages/Aboutus';
import Homepage from './pages/Homepage'; // Ensure this is correctly imported
import { Privacypolicy } from './pages/Privacypolicy';
import { Termsncondition } from './pages/Termsncondition';
import { Froker } from './pages/Froker';
import { Blogs } from './pages/Blogs';
import { Blogpage } from './components/Blogpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route  path='/privacy-policy' element={<Privacypolicy/>}/>
        <Route  path='/terms-and-conditions' element={<Termsncondition/>}/>
        <Route  path='/blogs' element={<Blogs/>}/>
        
        <Route path='/blogs/:id' element={<Blogpage />} /> 


        <Route  path='/froker' element={<Froker/>}/>



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

