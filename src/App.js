import NavBar from "./components/Navbar";
import AboutMe from "./AboutMe";
import IOSApps from "./apps/iOSApps";
import WebApps from "./apps/WebApps";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <div className="w-full overflow-x-none bg-white dark:bg-black w-full h-fit">
      <div className="relative w-fit h-full bg-gradient-to-b from-blue-300 dark:from-blue-900">
          <div className="flex flex-col fixed w-full bg-inherit z-10">
            <NavBar/>
          </div>
          <AboutMe/>
      </div>
      <div className="ml-5 relative mr-5 space-y-10 py-20">
      <Skills/>
      <Experience/>
      <IOSApps/>
      <WebApps/>
      <Education/>
      <Contact/>
      </div>
      <div className="w-full justify-center items-center flex flex-col pb-8">
        <h1 className="text-black dark:text-white text-2xl">Jared Kozar, {new Date().getFullYear()}</h1>
        <h1 className="text-black dark:text-white text-2xl">Made with React and Tailwind CSS</h1>
      </div>
    </div>
  );
}

export default App;