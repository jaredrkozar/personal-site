import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card";
import VisionTextIcon from "../images/icons/VisionTextIcon.jpg"
import imageResizerIcon from "../images/icons/imageResizerIcon.jpg"
import VisionTextDarkScreenshots from "../images/screenshots/VisionTextMacDarkCombo.png"
import VisionTextLightScreenshots from "../images/screenshots/VisionTextMacLightCombo.png"

function IOSApps() {
    const iOSAppsItemList = [
         {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, taking a picture, via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            icon: VisionTextIcon,
            darkScreenshots: VisionTextDarkScreenshots,
            lightScreenshots: VisionTextLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "imageResizer",
            language: 'Swift',
            description: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images with other people.',
            icon: imageResizerIcon,
            darkScreenshots: VisionTextDarkScreenshots,
            lightScreenshots: VisionTextLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "imageResizer",
            language: 'Swift',
            description: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images with other people.',
            icon: imageResizerIcon,
            darkScreenshots: VisionTextDarkScreenshots,
            lightScreenshots: VisionTextLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "imageResizer",
            language: 'Swift',
            description: 'Easily resize any image on your iPad or Mac. Keep images the same aspect ratio or resize them to any dimension, and share the resized images with other people.',
            icon: imageResizerIcon,
            darkScreenshots: VisionTextDarkScreenshots,
            lightScreenshots: VisionTextLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
     ]

    return (
        <div className="">
            <HeaderTextStyle title="iOS Apps" bgStyle="bg-orange-600 dark:bg-orange-500" description="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:"></HeaderTextStyle>
            <div className="relative top-6">
                <div className="relative grid grid-cols-apps gap-6">
                {
                    iOSAppsItemList.map((app) =>
                        <Card currentApp={app} backgroundColor="bg-orange-600/40 dark:bg-orange-500/40" originalColor="bg-orange-600 dark:bg-orange-500" key={app.name}></Card>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default IOSApps;