import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import About from "./components/about/About"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
