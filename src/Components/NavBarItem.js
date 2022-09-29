import React from "react";
import Resume from '../Images/Resume-3.pdf'

function NavBarItem(props) {
    return (
      <div class="text-blue-700 dark:text-white rounded-md relative bg-transparent hover:bg-lightBlue dark:hover:bg-slate-900 hover:text-lg stroke-1200 stroke-2 hover:stroke-3 dark:hover:stroke-3">
          <a href = {props.item.name == "Resume" ? Resume : props.item.link}>
  
              <div class="transform transition duration-500 hover:scale-110 flex items-center p-4 gap-2">
            
                  {props.item.icon}
                  <h1 class="hidden md:block lg:block">{props.item.name}</h1>
              </div>
          </a>
      </div>
    );
}

export default NavBarItem;