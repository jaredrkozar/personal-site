import React from "react";
import Card from '../Components/Card';
import VisionTextIcon from  "../Images/VisionTextIcon.png";
import imageResizerIcon from  "../Images/imageResizerIcon.png";
import CalculatorIcon from  "../Images/CalculatorIcon.png";
import SimpleNotesIcon from  "../Images/SimpleNotesIcon.png";

function iOSApps() {
  return (
    <div className="relative">
        <h2 className="text-4xl font-bold"> iOS Apps</h2>

        <h3 className="text-2xl font-semibold py-2"> Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:</h3>
        <div class="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        <Card mainTitle="SimpleNotes" mainDescription="Easily take notes with your iPhone or iPad. You can sketch using a pen or highlighter, input text and insert shapes. You can also upload notes to cloud services like Dropbox and Google Drive." language="Swift" appIcon={SimpleNotesIcon} firstColor="from-blue-400" secondColor="to-blue-700" link="https://github.com/jaredrkozar/SimpleNotes"></Card>
        <Card mainTitle="VisionText" mainDescription="Import an image by scanning a document, taking a picture, importing via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume." language="Swift" appIcon={VisionTextIcon} firstColor="from-red-400" secondColor="to-red-700" link="https://github.com/jaredrkozar/VisionText"></Card>
        <Card mainTitle="imageResizer" mainDescription="Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images with other people." language="Swift" appIcon={imageResizerIcon} firstColor="from-indigo-500" secondColor="to-indigo-700" link="https://github.com/jaredrkozar/imageresizer"></Card>
        <Card mainTitle="Calculator" mainDescription="A highly customizable calculator for iPhone and Apple Watch. Customize the app icon, tint and button color, rounding value, and more." language="Swift" appIcon={CalculatorIcon} firstColor="from-green-600" secondColor="to-green-800" link="https://github.com/jaredrkozar/Calculator"></Card>
        </div>
    </div>
  );
}

export default iOSApps;