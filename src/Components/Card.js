import { TechListSmall } from "./TechList";
import { GithubAppButton } from "./Buttons";

export function Card(props) {
    let classstr = "content-center relative p-4 h-fit w-fit " + props.backgroundColor + " rounded-2xl flex flex-col dark:text-white text-black";
   
    return (
        <div className={classstr}>
            <div className="flex flex-row align-baseline relative space-x-24">
                <img class="object-cover h-20 w-20 absolute rounded-xl" src={props.currentApp.icon} alt="icon"></img>
                <div className=" bg-inherit absolute top-0 right-0">
                <GithubAppButton link={props.currentApp.githubLink}></GithubAppButton>
            </div>
                <div className="flex flex-col relative text-left space-y-2">
                    <h1 className="md:text-3xl text-2xl font-bold">{props.currentApp.name}</h1>
                    <TechListSmall techName={props.currentApp.language} backgroundColor={props.originalColor}></TechListSmall>
                </div>
            </div>
            <img class="h-80 w-100 object-scale-down relative rounded-md block dark:hidden" src={props.currentApp.lightScreenshots} alt="app screenshot"></img>
            <img class="h-80 w-100 object-scale-down relative rounded-md hidden dark:block" src={props.currentApp.darkScreenshots} alt="app screenshot"></img>

            <h1 className="md:text-2xl text-xl w-full">{props.currentApp.description}</h1>
        </div>
    )
}