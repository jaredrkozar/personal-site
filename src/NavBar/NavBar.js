import React from "react";
import MemojiIcon from  "../Images/Memoji.png";
import NavBarItem from "../Components/NavBarItem.js";
import { navBarItemList } from "../NavBar/NavBarItems.js";

function NavBar() {
  return (
    <nav className="bg-inherit text-inherit flex items-center h-20 relative top-5">
        <div className="w-full flex flex-wrap bg-transparent justify-between px-6">
        
            <div class="relative gap-3">
                <div class="text-2xl font-bold gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
                   <img class="object-cover h-14 w-14 rounded-md" src={MemojiIcon}></img>
                   <h1 class="hidden md:block lg:block">Jared Kozar</h1>
                </div>
                </div>
        
            <div class="flex items-center relative gap-3">
            {navBarItemList.map((item, id) => (
                <NavBarItem item={item} key={id}></NavBarItem>
            ))}
            </div>

        </div>
    </nav>
  );
}

export default NavBar;