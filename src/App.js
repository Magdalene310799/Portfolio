import './App.css';
import Navbar from './COMPONENTS/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './COMPONENTS/About';
import Education from './COMPONENTS/Education';
import Skills from './COMPONENTS/Skills';
import Projects from './COMPONENTS/Projects';
import Testimonials from './COMPONENTS/Testimonials';
import Contact from './COMPONENTS/Contact';
import Home from './COMPONENTS/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/education' element={<Education/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/testimonials' element={<Testimonials/>}/>
       <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
    </div>
  );
};

export default App;



 










      
   