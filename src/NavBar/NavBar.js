import React from "react";
import { BackButton, NameButton } from "../Components/Buttons.js";
import NavBarItem from "../Components/NavBarItem.js";
import { navBarItemList } from "../NavBar/NavBarItems.js";

function NavBar(props) {
  let leftItem;

  if( props.showBackButton) {
    leftItem = <BackButton/>
  } else {
    leftItem = <NameButton/>
  }

  return (
    <nav className="bg-inherit text-inherit flex h-20 relative top-5">
        <div className="w-full flex flex-wrap bg-transparent items-center justify-between px-4">
          
            {leftItem}
            <div class="flex relative gap-3">
            {navBarItemList.map((item, id) => (
                <NavBarItem item={item} key={id}></NavBarItem>
            ))}
            </div>

        </div>
    </nav>
  );
}

export default NavBar;