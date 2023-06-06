import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card";
import VisionTextIcon from "../images/icons/VisionTextIcon.jpg"
import imageResizerIcon from "../images/icons/imageResizerIcon.jpg"
import VisionTextDarkScreenshots from "../images/screenshots/VisionTextDarkCombo.png"
import VisionTextLightScreenshots from "../images/screenshots/VisionTextLightCombo.png"
import ImageResizerDarkScreenshots from "../images/screenshots/ImageResizerDarkCombo.png"
import ImageResizerLightScreenshots from "../images/screenshots/ImageResizerLightCombo.png"

function IOSApps() {
    const iOSAppsItemList = [
         {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, from your photo library, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            icon: VisionTextIcon,
            darkScreenshots: VisionTextDarkScreenshots,
            lightScreenshots: VisionTextLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
            technologies: ["VisionKit", "Diffable Tables", "Core Data", "Mac Catalyst", "AVFoundation"]
        },
        {
            name: "imageResizer",
            language: 'Swift',
            description: 'Easily resize any image on your iPad or Mac. Keep resized images in the same aspect ratio as the original image or resize them to any dimension, and share the resized images with other people.',
            icon: imageResizerIcon,
            darkScreenshots: ImageResizerDarkScreenshots,
            lightScreenshots: ImageResizerLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/imageResizer",
            technologies: ["Diffable Tables", "Core Data", "Mac Catalyst", "AVFoundation"]
        }
     ]

    return (
        <div className="">
            <HeaderTextStyle title="iOS Apps" bgStyle="bg-orange-600 dark:bg-orange-500" description="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:"></HeaderTextStyle>
            <div className="relative top-6 w-full">
                <div className="w-full relative grid md:grid-cols-apps gap-6">
                {
                    iOSAppsItemList.map((app) =>
                        <Card currentApp={app} backgroundColor="bg-orange-500/40 dark:bg-orange-500/40" originalColor="bg-orange-600 dark:bg-orange-500" key={app.name}></Card>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default IOSApps;