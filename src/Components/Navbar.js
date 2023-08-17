import React, {useState} from "react";
import profilePicture from "../profilePicture.jpg"
import { BsChevronDown, BsChevronUp, BsLinkedin, BsGithub, BsFileText, BsEnvelope } from "react-icons/bs";
import { NavbarButton } from "./Buttons";

function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const renderItems = (direction) => {
        const className = "w-full relative gap-6 align-middle justify-start flex " + direction

        return (
            <div className={className}>
                {navBarItemList.map((navItem, id) => (
                    <NavbarButton item={navItem} key={id}></NavbarButton>
                ))}
            </div>
        )
    }

  const navBarItemList = [
    {
         name: "LinkedIn",
         icon: <BsLinkedin/>,
         link: "https://www.linkedin.com/in/jaredkozar/",
     },
     {
        name: "GitHub",
        icon: <BsGithub/>,
        link: "https://github.com/jaredrkozar",
    },
    {
        name: "Resume",
        icon: <BsFileText/>,
    },
    {
        name: "Email",
        icon: <BsEnvelope/>,
        link: "mailto:jared.rkozar@gmail.com",
    },
 ]

 const handleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen)
 }

  return (
    <header className="transition-height ease align-middle sticky top-0 h-fit p-2 z-10 backdrop-blur-md border-b border-gray-200 h-fit items-center bg-slate-200/30 dark:bg-black/50">
        <div className="w-full flex flex-wrap flex-row bg-transparent justify-between px-4 text-black dark:text-white">
          
          <div className="relative gap-3">
              <div className="text-2xl font-bold gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
              <img className="object-cover h-14 w-14 rounded-full border-white border" src={profilePicture} alt="picture of jared kozar"></img>
              <h1>Jared Kozar</h1>
              </div>

          </div>

          <div className="hidden ontolg:flex">
            {renderItems("flex-row")}
          </div>

            <div className="flex ontolg:hidden text-5xl relative gap-6 flex-row align-middle justify-start">
                <button className="text-5xl" onClick={event =>handleMenu()}>
                    {menuOpen ? <BsChevronUp/> : <BsChevronDown/>}
                </button>
            </div>
        </div>

        <div className="flex ontolg:hidden">
            {menuOpen ? renderItems("flex-col") : null}
          </div>

    </header>
  );
}

export default NavBar;