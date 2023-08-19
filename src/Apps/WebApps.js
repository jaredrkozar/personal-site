import { HeaderTextStyle } from "../components/TextStyles"
import { Card } from "../components/Card"
import NotesAppDarkScreenshots from "../images/screenshots/NotesAppDark.png"
import NotesAppLightScreenshots from "../images/screenshots/NotesAppLight.png"
import StreamConnectLight from "../images/screenshots/StreamConnectLight.png"
import StreamConnectDark from "../images/screenshots/StreamConnectDark.png"

function WebApps() {
    const colors = {
        fullBackground: "bg-emerald-700 dark:bg-emerald-600",
        opaqueBackground: "bg-emerald-400/40  dark:bg-emerald-700/40",
        imageBackground: "border-emerald-700 text-emerald-700 dark:border-emerald-200 dark:text-emerald-200 hover:bg-emerald-700 hover:text-emerald-200 dark:hover:text-emerald-900 dark:hover:bg-emerald-200",
        fullText: "text-emerald-700 dark:text-emerald-300 font-bold"
    }

    const webAppsItemList = [
         {
            name: "Notes-App",
            language: 'HTML, CSS, JavaScript',
            description: 'Easily take text-based notes right in your browser and organize them using folders',
            darkScreenshots: NotesAppDarkScreenshots,
            lightScreenshots: NotesAppLightScreenshots,
            githubLink: "https://github.com/jaredrkozar/notes-App",
            technologies: ["SQL", "Express.js", "Node.js"]
        },
        {
            name: "StreamConnect",
            language: 'React.js',
            description: 'Fetches images for rivers in Connecticut based on the dates and locations the user selected. Easily filter images by year and month.',
            darkScreenshots: StreamConnectDark,
            lightScreenshots: StreamConnectLight,
            githubLink: "https://github.com/jaredrkozar/streamConnectViz/tree/jared",
            technologies: ["React Redux, Express.js, Node.js"]
        }
     ]

    return (
        <div className="">
            <HeaderTextStyle title="Web Apps" bgStyle={colors.fullBackground}>
            <h1 className="md:text-3xl text-2xl font-medium text-black dark:text-white">Here are some of the web applications I have worked on using <span className={colors.fullText}>React.js, Express.js, Node.js, HTML, CSS, and JavaScript</span>:</h1>
            </HeaderTextStyle>
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