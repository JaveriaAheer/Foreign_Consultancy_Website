import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experiience from "./Components/Experience/Experiience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footersec from "./Components/Footersec/Footersec";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme= useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? 'black':'',
        color : darkMode? 'white':''
      }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footersec/>
    </div>
  );
}

export default App;
