import React from "react";

function NavBarItem(props) {
    return (
      <div className="flex flex-wrap justify-between items-center ">

        <h3 class="text-white">{props.mainTitle}</h3>
      </div>
    );
}

export default NavBarItem;