import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';

function App() {
  return (
    <div>
      <div className='main'>
        <Navbar />
        <Home />
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
      
    </div>


  )
}

export default App;
