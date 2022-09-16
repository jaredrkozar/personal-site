import React from "react";
import Card from '../Components/Card';
import { infoList } from './BaseInfo.js';
import { DetailStyle } from "../Components/TextStyles.js";

function AboutMe() {
  return (
    <div className="relative">
        <DetailStyle mainText="About Me" detailText="Here's some more info about me." isItalic={false}></DetailStyle>

        <div class="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
  
        </div>
    </div>
  );
}

export default AboutMe;