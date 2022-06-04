import React from "react";
import Card from '../Components/Card';
import VisionTextIcon from  "../Images/VisionTextIcon.png";
import PersonIcon from  "../Images/personIcon.png";

function AboutMe() {
  return (
    <div className="relative">
        <h2 className="text-4xl font-bold"> About Me</h2>

        <h3 className="text-2xl font-semibold py-2"> Here's some more info about me.</h3>
        <div class="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        <Card mainTitle="More Info" mainDescription="I am a student at the University of Hartford, where I am working towards my BS in computer science and BA in multimedia web design. I currently have a 3.98/4.0 GPA, and I participate in many clubs, including the Cybersecurity Club, the Computing Club, and the Hillel chapter at UHart." appIcon={PersonIcon} firstColor="from-gray-500" secondColor="to-gray-700"></Card>
        <Card mainTitle="Skills" mainDescription="I know many languages, technologies, and programming styles including Swift, React, Java, Git, object-oriented programming, functional programming, and more. Check out all my skills here." appIcon={PersonIcon} firstColor="from-gray-500" secondColor="to-gray-700"></Card>
        </div>
    </div>
  );
}

export default AboutMe;