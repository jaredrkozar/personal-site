import React from "react";
import {classnames} from 'tailwindcss-classnames';

function Card(props) {

   let classstr = "transition bg-pos-0 hover:bg-pos-100 bg-size-145 duration-500 transition-all bg-gradient-to-r " + props.firstColor + " " + props.secondColor + " transform hover:-translate-y-1 hover:scale-105 rounded-lg flex";

    return (
      <div className={classstr}>
        <a href={props.link}>
          <div class="group flex flex-wrap relative">
          <img class="object-cover h-14 w-14 absolute top-2 left-2 rounded-md" src={props.appIcon}></img>
            
            <div class="relative ml-16 mr-2 mb-10">

                <div class="flex items-center align-middle relative top-1">

                   <h1 class="text-lg font-bold text-white ml-2">{props.mainTitle}</h1>

                    <button class="font-bold absolute right-1 bg-transparent group-hover:bg-white group-hover:text-gray-400 text-white border border-white h-35 w-35 px-5 rounded-lg">
                        More Details
                    </button>
          
            </div>


              <h1 class="text-white top-5 ml-2 mr-1 relative">{props.mainDescription}</h1>
             </div>
      
      </div>
      </a>
      </div>
    );
  }
  export default Card;