import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card"
import NotesAppDarkScreenshots from "../images/screenshots/NotesAppDark.png"
import NotesAppLightScreenshots from "../images/screenshots/NotesAppLight.png"
import StreamConnectLight from "../images/screenshots/StreamConnectLight.png"
import StreamConnectDark from "../images/screenshots/StreamConnectDark.png"

function WebApps() {
    const colors = {
        fullBackground: "bg-emerald-600 dark:bg-emerald-700",
        opaqueBackground: "bg-emerald-600/30  dark:bg-emerald-700/40",
        imageBackground: "border-emerald-600 text-emerald-600 dark:border-emerald-200 dark:text-emerald-200 hover:bg-emerald-600 hover:text-emerald-200 dark:hover:text-emerald-800 dark:hover:bg-emerald-200",
        fullText: "text-emerald-600 dark:text-emerald-300"
    }

    const webAppsItemList = [
         {
            name: "Notes-App",
            language: 'HTML, CSS, JavaScript',
            description: 'Easily take text-based notes right in your browser and organize them using folders',
            darkScreenshots: NotesAppDarkScreenshots,
            lightScreenshots: NotesAppLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/notes-App",
            technologies: ["SQL", "Express", "Node.js"]
        },
        {
            name: "StreamConnect",
            language: 'React.js',
            description: 'Fetches images for rivers in Connecticut based on the dates and locations the user selected. Easily filter images by year and month.',
            darkScreenshots: StreamConnectDark,
            lightScreenshots: StreamConnectLight,
            githubLink: "https://github.com/jaredrkozar/streamConnectViz/tree/jared",
            technologies: ["React Redux, Express, Node.js"]
        }
     ]

    return (
        <div className="">
            <HeaderTextStyle title="Web Apps" bgStyle={colors.fullBackground} description="Here are some of the web applications I have worked on using React.js, Express.js, HTML, CSS, and JavaScript:"></HeaderTextStyle>
            <div className="relative top-6 w-full">
                <div className="w-full relative grid md:grid-cols-apps gap-6">
                {
                    webAppsItemList.map((app) =>
                    <Card currentApp={app} colors={colors} key={app.name}></Card>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default WebApps;