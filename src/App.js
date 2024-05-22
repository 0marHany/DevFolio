import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AboutProvider from './Components/Context/Context';



function App() {
  return (
    <>
      <AboutProvider >
        <NavBar />
        <Home />
        <About />
        <Services />
        <Portfolio />

        <Blog />
        <Contact />
        <Footer />
      </AboutProvider >
    </>
  );
}

export default App;
