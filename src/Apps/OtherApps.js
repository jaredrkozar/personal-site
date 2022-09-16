import React from "react";
import { DetailStyle } from "../Components/TextStyles.js";

function OtherApps() {
  return (
    <div className="relative">

        <DetailStyle mainText="Other Apps" detailText="Here are some of the other projects I've worked on:<" isItalic={false}></DetailStyle>

        <div className="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
          
        </div>
    </div>
  );
}

export default OtherApps;