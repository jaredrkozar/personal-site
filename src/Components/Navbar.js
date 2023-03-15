import React from "react";
import profilePicture from "../profilePicture.jpeg"
import Resume from "../Resume-9.pdf"

function NavBar(props) {
    const itemClicked = (item) => {
        return (
            <a href = {item.name == "Resume" ? Resume : item.link}>
        
                    <div className="transform transition duration-500 hover:scale-105 p-2 gap-2">
                        <h1 className="text-2xl">{item.name}</h1>
                    </div>
                </a>
        )
    }
  const navBarItemList = [
    {
         name: "LinkedIn",
         link: "https://www.linkedin.com/in/jaredkozar/",
     },
     {
        name: "GitHub",
        link: "https://github.com/jaredrkozar",
    },
    {
        name: "Resume",
    },
    {
        name: "Email",
        link: "mailto:jared.rkozar@gmail.com",
    },
 ]

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md border-b border-gray-200 h-16 items-center flex bg-slate-200/30 dark:bg-black/50">
        <div className="w-full flex flex-wrap flex-row bg-transparent justify-between px-4 text-black dark:text-white">
          
          <div class="relative gap-3">
              <div class="text-2xl font-bold gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
              <img class="object-cover h-14 w-14 rounded-full border-white border" src={profilePicture}></img>
              <h1>Jared Kozar</h1>
              </div>
          </div>
            <div className="flex relative gap-6 flex-row align-middle">
            {navBarItemList.map((item, id) => (
                <div className="rounded-lg relative bg-transparent hover:bg-slate-400/50 dark:hover:bg-white/20 hover:text-lg flex items-center justify-center">
                {itemClicked(item)}
             </div>
            ))}
            </div>

        </div>
    </header>
  );
}

export default NavBar;