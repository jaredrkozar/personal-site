import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import NavBar from "./NavBar/NavBar";
import IOSApps from  "./Apps/iOSApps";
import OtherApps from  "./Apps/OtherApps";
import Footer from  "./Footer/Footer";

function App() {
  return (
    <div className="flex flex-col">
  <NavBar/>
  <div className="space-y-20 ml-5 relative mr-5">
  <Header/>
  <AboutMe/>
  <IOSApps/>
  <OtherApps/>
  <Footer/>
  </div>
  
  </div>

  );
}

export default App;