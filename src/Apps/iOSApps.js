import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card";
import VisionTextIcon from "../images/icons/VisionTextIcon.jpg"
import imageResizerIcon from "../images/icons/imageResizerIcon.jpg"
import VisionTextDarkScreenshots from "../images/screenshots/VisionTextDarkCombo.png"
import VisionTextLightScreenshots from "../images/screenshots/VisionTextLightCombo.png"
import ImageResizerDarkScreenshots from "../images/screenshots/ImageResizerDarkCombo.png"
import ImageResizerLightScreenshots from "../images/screenshots/ImageResizerLightCombo.png"

function IOSApps() {
    const colors = {
        fullBackground: "bg-orange-600 dark:bg-orange-600",
        opaqueBackground: "bg-orange-300/40 dark:bg-orange-400/40",
        imageBackground: "border-orange-600 text-orange-600 dark:border-orange-200 dark:text-orange-200 hover:bg-orange-600 hover:text-orange-100 dark:hover:text-orange-800 dark:hover:bg-orange-200",
        fullText: "text-orange-600 dark:text-orange-300 font-bold"
    }

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
            <HeaderTextStyle title="iOS Apps" bgStyle={colors.fullBackground}>
                <h3 className="md:text-3xl text-2xl font-medium text-black dark:text-white">Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on using <span className={colors.fullText}>Swift and SwiftUI</span>:</h3>
            </HeaderTextStyle>

            <div className="relative top-6 w-full">
                <div className="w-full relative grid md:grid-cols-apps gap-6">
                {
                    iOSAppsItemList.map((app) =>
                        <Card currentApp={app} colors={colors} key={app.name}></Card>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default IOSApps;