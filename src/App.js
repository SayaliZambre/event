// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  Home  from "./components/Home";
import  Service  from "./components/Service";
import 'bootstrap/dist/css/bootstrap.min.css';
// import  Vendore  from "./components/Vendore";
// import 'bootstrap/dist/css/bootstrap.min.css';


import  Venu  from "./components/Venu";
import  {Footer}  from "./components/Footer";
import  Navbar  from "./components/Navbar";
import {Contact} from "./components/Contact";
import CardDesign from './components/CardDesign';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
    {/* <Vendore /> */}
      <Venu />
      <CardDesign/>
      <Contact/>
      <Service />
      <Footer/>
    
    </div>
  );
}

export default App;
