import { HeaderTextStyle } from "../components/TextStyles"

function IOSApps() {
    const iOSAppsItemList = [
        {
            name: "SimpleNotes",
            language: 'Swift',
            description: 'Easily take notes with your iPhone or iPad. You can sketch using a pen or highlighter, input text and insert shapes. You can also upload notes to cloud services like Dropbox and Google Drive.',
            // appIcon: SimpleNotesIcon,
            // appStoreLink: "https://github.com/jaredrkozar/VisionText",
            githubLink: "https://github.com/jaredrkozar/SimpleNotes",
         },
         {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, taking a picture, importing via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            // appIcon: VisionTextIcon,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "imageResizer",
            language: 'Swift',
            description: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images.',
            // appIcon: imageResizerIcon,
            githubLink: "https://github.com/jaredrkozar/imageResizer",
        },
        {
            name: "Calculator",
            language: 'Swift',
            shortDescription: 'A highly customizable calculator for iPhone and Apple Watch. Customize the app icon, tint and button color, rounding value, and more.',
            // appIcon: CalculatorIcon,
            githubLink: "https://github.com/jaredrkozar/Calculator",
        },
     ]

    return (
        <div className="">
            <HeaderTextStyle title="iOS Apps" bgStyle="bg-yellow-600 dark:bg-yellow-500" description="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:"></HeaderTextStyle>
        </div>
    )
}

export default IOSApps;