import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DropDown from './Components/DropDown/DropDown';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Onboarding from './Components/Onboarding/Onboarding';
import Plan from './Components/Plan/Plan';
import Automation from './Components/Automation/Automation';
import Engagement from './Components/Engagement/Engagement';
import Integration from './Components/Integration/Integration';
import Disclaimer from './Components/Disclaimer/Disclaimer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <DropDown/> */}
     <Header/>
     <Features/>
     <About/>
     <Onboarding/>
     <Plan/>
     <Automation/>
     <Engagement/>
     <Integration/>
     <Disclaimer/>
     <Contact/>
    </div>
  );
}

export default App;
