import NavBar from "./components/Navbar";
import AboutMe from "./AboutMe";
import IOSApps from "./apps/iOSApps";
import Skills from "./Skills";

function App() {
  return (
    <div className="relative w-full bg-white dark:bg-black">
      <div className="relative w-full h-128 bg-gradient-to-b from-blue-300 dark:from-blue-900">
          <div className="flex flex-col fixed w-full bg-inherit z-10">
            <NavBar/>
          </div>
          <AboutMe/>
      </div>
      <div className="relative ml-10">
      <Skills/>
      <IOSApps/>
      </div>
    </div>
  );
}

export default App;