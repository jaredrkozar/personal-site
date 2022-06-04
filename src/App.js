import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import NavBar from "./NavBar/NavBar";
import IOSApps from  "./Apps/iOSApps";
import OtherApps from  "./Apps/OtherApps";
import Footer from  "./Footer/Footer";

function App() {
  return (
    <div class="flex flex-col min-h-screen bg-white dark:bg-slate-800 dark:text-white">
     <NavBar/>
     <div class="space-y-20 relative left-10 mr-10">
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