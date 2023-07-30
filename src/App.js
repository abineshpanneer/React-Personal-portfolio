import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/intro/intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import { Lang } from "./Components/Lang/Lang";
import Teammates from "./Components/Teammates/Teammates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000
 });

 function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
         style={{
         background:darkMode? 'black':'',
         color: darkMode? 'white':'',}}>
       <div>
      <Helmet>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      {/* ... */}
    </div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Lang/>
      <Teammates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
