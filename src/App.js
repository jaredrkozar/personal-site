import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import NavBar from "./NavBar/NavBar";
import IOSApps from  "./Apps/iOSApps";
import OtherApps from  "./Apps/OtherApps";
import Footer from  "./Footer/Footer";
import { DetailStyle } from "./Components/TextStyles.js";

function App() {
  return (
    <div className="w-full bg-inherit">
      <div className="flex flex-col fixed w-full bg-inherit z-10">
        <NavBar showBackButton={false}/>
      </div>
        <div className="ml-5 relative mr-5 space-y-10 py-20">
          <Header/>
          <AboutMe/>
          <IOSApps/>
          <OtherApps/>
          <DetailStyle mainText="Contact" detailText="Feel free to contact me at jared.rkozar@gmail.com or connect with me on LinkedIn if you want me to help you with any projects" isItalic={false}></DetailStyle>
          <Footer/>
        </div>
     </div>
  );
}

export default App;