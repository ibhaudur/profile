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
    <>
      <Head/>
      <P1/>
      <Topic Head="About" con="Our software development services" i="ab"/>
      <About/>
      <Topic Head="Skills" con="Our software development services" i="Skill"/>
      <Skill/>
      <Topic Head="Contact" con="Our software development services" i="contact"/>
      <Contact/>
      
    </>

    
  );
}

export default App;
