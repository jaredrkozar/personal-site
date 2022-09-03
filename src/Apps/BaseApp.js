import SimpleNotesIcon from  "../Images/SimpleNotesIcon.png"; 
import VisionTextIcon from  "../Images/VisionTextIcon.png";
import imageResizerIcon from  "../Images/imageResizerIcon.png";
import CalculatorIcon from  "../Images/CalculatorIcon.png";
import icons from '../Images/exportImages.js';

export const appList = {
    "simplenotes": {
        name: "SimpleNotes",
        language: 'Swift',
        shortDescription: 'Easily take notes with your iPhone or iPad. You can sketch using a pen or highlighter, input text and insert shapes. You can also upload notes to cloud services like Dropbox and Google Drive.',
        appIcon: SimpleNotesIcon,
        link: "www.google.com",
        firstColor: 'from-blue-400',
        secondColor: 'to-blue-700',
    },
    "visiontext": {
        name: "VisionText",
        language: 'Swift',
        shortDescription: 'Import an image by scanning a document, taking a picture, importing via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
        appIcon: VisionTextIcon,
        link: "www.google.com",
        firstColor: 'from-red-400',
        secondColor: 'to-red-700',
    },
    "imageresizer": {
        name: "imageResizer",
        language: 'Swift',
        shortDescription: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images with other people.',
        appIcon: imageResizerIcon,
        link: "www.google.com",
        firstColor: 'from-indigo-500',
        secondColor: 'to-indigo-700',
        iPadScreenshots: [icons.imageResizeriPadPic1, icons.imageResizeriPadPic2, icons.imageResizeriPadPic3],
        macScreenshots: [icons.imageResizerMacPic1, icons.imageResizerMacPic2, icons.imageResizerMacPic3]
    },
    "calculator": {
        name: "Calculator",
        language: 'Swift',
        shortDescription: 'A highly customizable calculator for iPhone and Apple Watch. Customize the app icon, tint and button color, rounding value, and more.',
        appIcon: CalculatorIcon,
        link: "www.google.com",
        firstColor: 'from-green-600',
        secondColor: 'to-green-800',
    }
  };