import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
