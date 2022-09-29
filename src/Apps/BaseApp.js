import SimpleNotesIcon from  "../Images/SimpleNotesIcon.png"; 
import VisionTextIcon from  "../Images/VisionTextIcon.png";
import imageResizerIcon from  "../Images/imageResizerIcon.png";
import CalculatorIcon from  "../Images/CalculatorIcon.png";
import icons from '../Images/exportImages.js';
import ClojureIcon from '../Images/clojureIcon.png';
import SwiftIcon from '../Images/SwiftIcon.jpg';
import JavaIcon from '../Images/JavaIcon.jpg';

export const appList = {
    "simplenotes": {
        name: "SimpleNotes",
        language: 'Swift',
        shortDescription: 'Easily take notes with your iPhone or iPad. You can sketch using a pen or highlighter, input text and insert shapes. You can also upload notes to cloud services like Dropbox and Google Drive.',
        longDescription:  ["Easily take notes using your iPhone, iPad or Mac. You can draw, highlight, insert text and pictures, and draw shapes.",
        <br/>,
        <br/>,
        "You can also tag your notes so you can quickly find them, and upload your notes to cloud services such as Google Drive and Dropbox."],
        appIcon: SimpleNotesIcon,
        firstColor: 'from-blue-400',
        secondColor: 'to-blue-700',
        appStoreLink: "https://github.com/jaredrkozar/VisionText",
        githubLink: "https://github.com/jaredrkozar/SimpleNotes",
    },
    "visiontext": {
        name: "VisionText",
        language: 'Swift',
        shortDescription: 'Import an image by scanning a document, taking a picture, importing via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
        longDescription:  ["VisionText is an easy to use, lightweight app that lets you extract and read aloud the text from scanned documents, photos \n in your photo library, images on the internet, and more.",
        <br/>,
        <br/>,
        "You can import images using drag and drop, from a URL, by scanning a document, from the Files app, from your photo library, and by taking a picture using the device's camera."],
        appIcon: VisionTextIcon,
        link: "www.google.com",
        firstColor: 'from-red-400',
        secondColor: 'to-red-700',
        githubLink: "https://github.com/jaredrkozar/VisionText",
        iPadScreenshots: [icons.VisionTextiPadPic1, icons.VisionTextiPadPic2, icons.VisionTextiPadPic3],
        macScreenshots: [icons.VisionTextMacPic1, icons.VisionTextMacPic2, icons.VisionTextMacPic3]
    },
    "imageresizer": {
        name: "imageResizer",
        language: 'Swift',
        shortDescription: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images.',
        longDescription:  ["Resize any image you want with the tap of a button. You can choose to mantain the same aspect ratio as the original image, or change the dimensions to a size of your choice.",
        <br/>,
        <br/>,
        "You can import images using drag and drop, from a URL, by scanning a document, from the Files app, from your photo library, and by taking a picture using the device's camera."],
        appIcon: imageResizerIcon,
        githubLink: "www.google.com",
        firstColor: 'from-indigo-500',
        secondColor: 'to-indigo-700',
        githubLink: "https://github.com/jaredrkozar/imageResizer",
        iPadScreenshots: [icons.imageResizeriPadPic1, icons.imageResizeriPadPic2, icons.imageResizeriPadPic3],
        macScreenshots: [icons.imageResizerMacPic1, icons.imageResizerMacPic2, icons.imageResizerMacPic3]
    },
    "calculator": {
        name: "Calculator",
        language: 'Swift',
        shortDescription: 'A highly customizable calculator for iPhone and Apple Watch. Customize the app icon, tint and button color, rounding value, and more.',
        longDescription:  ["A simple calculator that lets you easily calculate math equiations. You can customizee many aspects of the app, such as the rounding value to use, the font, the tint color for the calculator buttons,  the button click sound, the app icon, and more"],
        appIcon: CalculatorIcon,
        githubLink: "www.google.com",
        firstColor: 'from-green-600',
        secondColor: 'to-green-800',
        githubLink: "https://github.com/jaredrkozar/Calculator",
        iPhoneScreenshots: [icons.CalculatoriPhonePic1, icons.CalculatoriPhonePic2, icons.CalculatoriPhonePic3],
        watchScreenshots: [icons.CalculatorWatchPic1, icons.CalculatorWatchPic2, icons.CalculatorWatchPic3]
    },
};

export const otherAppList = {
    "nytbot": {
        name: "NYT Bot",
        language: 'Clojure',
        shortDescription: 'Search the New York Times article database by query, section, start date and end date',
        longDescription:  ["A simple application that allows you to search the New York Times article database by query, start date, end date, and section. You can open the selected article in another tab, or go to the next or previous articles that were fetched,"],
        appIcon: ClojureIcon,
        githubLink: "https://github.com/jaredrkozar/nyt-bot",
        firstColor: 'from-cyan-600',
        secondColor: 'to-cyan-800',
        githubLink: "https://github.com/jaredrkozar/nyt-bot",
        macScreenshots: [icons.NYTBotPic1, icons.NYTBotPic2, icons.NYTBotPic3],
    },
    "swiftymathparser": {
        name: "SwiftyMathParder",
        language: 'Swift',
        shortDescription: 'Swift calculator that lets you perform various mathematical operations.',
        longDescription:  ["A simple Swift calculator that lets you perform mathematical operations using addition, subtraction, multiplication, division, exponents, modulo, square root, and parentheses.",
        <br/>,
        "You can also check equations to see if they're true"],
        appIcon: SwiftIcon,
        githubLink: "https://github.com/jaredrkozar/SwiftyMathParser",
        firstColor: 'from-orange-600',
        secondColor: 'to-orange-800',
        macScreenshots: [icons.NYTBotPic1, icons.NYTBotPic2, icons.NYTBotPic3],
    },
    "HashTablesCalc": {
        name: "HashTablesCalc",
        language: 'Java',
        shortDescription: 'Java command line application that calculates hash tables using double or quadratic hashing.',
        longDescription:  ["A simple Java application that lets you calculate hash tables using double or quadratic hashing while avoiding collisions,"],
        appIcon: JavaIcon,
        githubLink: "https://github.com/jaredrkozar/HashTablesCalc",
        firstColor: 'from-blue-700',
        secondColor: 'to-blue-900',
        macScreenshots: [icons.NYTBotPic1, icons.NYTBotPic2, icons.NYTBotPic3],
    },
};