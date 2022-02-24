import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes,Route} from 'react-router-dom';
import Head from './Head';
import P1 from './P1';
import Topic from './Topic';
import About from './About';
import Contact from './Contact';
import Skill from './Skill';



function App() {
  return (
    <div>
      <Head/>
      <P1/>
      <Topic Head="About" con="Our software development services"/>
      <About/>
      <Topic Head="Skills" con="Our software development services"/>
      <Skill/>
      <Topic Head="Contact" con="Our software development services"/>
      <Contact/>
      
    </div>

    
  );
}

export default App;
