// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavbarComponent/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import About from './Components/aboutComponent/about.js'
import Divider from './Components/divider/divider.js'
import Contact from './Components/contactComponent/Contact.js';
import Footer from './Layouts/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <img src="/Assets/images/background.jpeg" class="img-fluid" alt="..." />
      </div>
      <About />
      <Divider />
      <Contact />
      <Footer />
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
