import React from "react";
import Card from '../Components/Card';
import { infoList } from './BaseInfo.js';

function AboutMe() {
  return (
    <div className="relative">
        <h2 className="text-4xl font-bold"> About Me</h2>

        <h3 className="text-2xl font-semibold py-2"> Here's some more info about me.</h3>
        <div class="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
  
        </div>
    </div>
  );
}

export default AboutMe;