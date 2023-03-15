import { HeaderTextStyle } from "../components/TextStyles"

function IOSApps() {
    const iOSAppsItemList = [
        {
             name: "LinkedIn",
             link: "https://www.linkedin.com/in/jaredkozar/",
         },
         {
            name: "GitHub",
            link: "https://github.com/jaredrkozar",
        },
        {
            name: "Resume",
        },
        {
            name: "Email",
            link: "mailto:jared.rkozar@gmail.com",
        },
     ]

    return (
        <div className="">
            <HeaderTextStyle title="iOS Apps" bgStyle="bg-red-600 dark:bg-red-400" description="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:"></HeaderTextStyle>
        </div>
    )
}

export default IOSApps;