import React, {useState} from "react";
import profilePicture from "../profilePicture.jpeg"
import Resume from "../Resume-9.pdf"
import { BsChevronDown, BsChevronUp, BsLinkedin, BsGithub, BsFileText, BsEnvelope } from "react-icons/bs";

function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const renderItems = (direction) => {
        const className = "w-full relative gap-6 align-middle justify-start flex " + direction

        return (
            <div className={className}>
                {navBarItemList.map((item, id) => (
                    <div className="flex dark:text-white text-black rounded-lg relative bg-transparent hover:bg-slate-400/50 dark:hover:bg-white/20 hover:text-lg items-center justify-start" key={id}>
                        <a className="inline-flex w-full h-full" href = {item.name == "Resume" ? Resume : item.link}>
                            <div className="flex transform transition duration-500 hover:scale-105 p-2 gap-8 md:gap-3 flex justify-center items-center">
                                <h1 className="text-3xl">{item.icon}</h1>
                                <h1 className="text-2xl">{item.name}</h1>
                            </div>
                        </a>
                    </div>
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
              <img className="object-cover h-14 w-14 rounded-full border-white border" src={profilePicture}></img>
              <h1>Jared Kozar</h1>
              </div>

          </div>

          <div className="hidden md:flex">
            {renderItems("flex-row")}
          </div>

            <div className="flex md:hidden text-5xl relative gap-6 flex-row align-middle justify-start">
                <button className="text-5xl" onClick={event =>handleMenu()}>
                    {menuOpen ? <BsChevronUp/> : <BsChevronDown/>}
                </button>
            </div>
        </div>

        <div className="flex md:hidden">
            {menuOpen ? renderItems("flex-col") : null}
          </div>

    </header>
  );
}

export default NavBar;