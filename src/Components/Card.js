import React from "react";

function returnImage(props) {
  if (props.useSVG === false) {

  }
}

function Card(props) {
  
   let classstr = "transition bg-pos-0 hover:bg-pos-100 bg-size-145 duration-500 transition-all bg-gradient-to-r " + props.app.firstColor + " " + props.app.secondColor + " transform hover:-translate-y-1 hover:scale-105 rounded-lg flex";
    return (
      <div className={classstr}>
        <div className="group flex flex-wrap relative">
          <div className="absolute top-2 left-2">
          {props.useSVG === false ? <img class="h-14 w-14 rounded-md" src={props.app.appIcon} alt="dldl"></img> : props.app.appIcon}
          </div>
            <div class="relative ml-16 mr-2 mb-10">

                <div class="flex items-center align-middle relative top-1">

                   <h1 class="text-lg font-bold text-white ml-2">{props.app.name}</h1>
          
            </div>

            <h1 class="italic text-white top-2 ml-2 mr-1 relative">{props.app.language}</h1>
              <h1 class="text-white top-5 ml-2 mr-1 relative">{props.app.shortDescription}</h1>
            </div>
      
        </div>
      </div>
    );
  }
  export default Card;