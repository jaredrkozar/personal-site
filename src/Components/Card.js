import { TechListSmall } from "./TechList";
import { GithubAppButton } from "./Buttons";

export function Card(props) {
    let classstr = "content-center relative p-4 h-fit w-full ontolg:w-96 " + props.backgroundColor + " rounded-lg flex flex-col dark:text-white text-black";
   
    return (
        <div className={classstr}>
            <div className="flex flex-row align-baseline relative space-x-24">
                <img class="object-cover h-20 w-20 absolute rounded-xl" src={props.currentApp.icon} alt="icon"></img>
                <div className=" bg-inherit absolute top-1 right-1">
                <GithubAppButton link={props.currentApp.githubLink}></GithubAppButton>
            </div>
                <div className="flex flex-col relative text-left">
                    <h1 className="text-4xl font-bold">{props.currentApp.name}</h1>
                    <TechListSmall techName={props.currentApp.language} backgroundColor={props.originalColor}></TechListSmall>
                </div>
            </div>
            <img class="h-80 w-100 object-scale-down relative rounded-md" src={props.currentApp.screenshots} alt="app screenshot"></img>

            <h1 className="text-xl">{props.currentApp.description}</h1>
        </div>
    )
}