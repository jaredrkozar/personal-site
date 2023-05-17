import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card";
import VisionTextIcon from "../images/icons/VisionTextIcon.jpg"
import VisionTextScreenshots from "../images/screenshots/VisionTextMacDarkCombo.png"

function IOSApps() {
    const iOSAppsItemList = [
         {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, taking a picture, via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            icon: VisionTextIcon,
            screenshots: VisionTextScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, taking a picture, via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            icon: VisionTextIcon,
            screenshots: VisionTextScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        },
        {
            name: "VisionText",
            language: 'Swift',
            description: 'Import an image by scanning a document, taking a picture, via the Files app, and more. You can then read the text on the picture aloud, and adjust its speed, pitch and volume.',
            icon: VisionTextIcon,
            screenshots: VisionTextScreenshots,
            githubLink: "https://github.com/jaredrkozar/VisionText",
        }

     ]

    return (
        <div className="">
            <HeaderTextStyle title="iOS Apps" bgStyle="bg-orange-600 dark:bg-orange-500" description="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:"></HeaderTextStyle>
            <div className="relative w-full h-full top-6">
                <div className="grid grid-cols-apps gap-6">
                {
                    iOSAppsItemList.map((app) =>
                        <Card currentApp={app} backgroundColor="bg-orange-600/40 dark:bg-orange-500/60" originalColor="bg-orange-600 dark:bg-orange-500" key={app.name}></Card>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default IOSApps;