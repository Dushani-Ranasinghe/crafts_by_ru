import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import About from "./components/about/About"
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
