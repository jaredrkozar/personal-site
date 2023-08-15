import { TechListSmall } from "./TechList";
import { GithubAppButton } from "./Buttons";

export function Card(props) {
    
    let classstr = "content-center relative p-4 h-fit w-fit " + props.colors.opaqueBackground + " rounded-2xl flex flex-col dark:text-white text-black";

    return (
        <div className={classstr}>
            <div className="flex flex-row align-baseline relative space-x-24">
                {props.currentApp.icon ? <img class="object-cover h-20 w-20 absolute rounded-xl" src={props.currentApp.icon} alt="icon"></img> : null}
            
                <div className="flex flex-col relative space-y-2">
                    <h1 className={"md:text-3xl text-2xl font-bold " + props.colors.fullText}>{props.currentApp.name}</h1>
                    <h1 className={"flex-none w-max text-center md:text-2xl text-xl border-solid w-min p-1 rounded-lg font-medium text-white " + props.colors.fullBackground}>{props.currentApp.language}</h1>
                </div>
            </div>
            <img class="h-80 w-100 object-scale-down relative rounded-md block dark:hidden" src={props.currentApp.lightScreenshots} alt="app screenshot"></img>
            <img class="h-80 w-100 object-scale-down relative rounded-md hidden dark:block" src={props.currentApp.darkScreenshots} alt="app screenshot"></img>

            <h1 className="md:text-2xl text-xl w-full">{props.currentApp.description}</h1>

            <TechListSmall title="Technologies Used:" array={props.currentApp.technologies}></TechListSmall>
            <div className="absolute top-4 right-4">
                    <GithubAppButton link={props.currentApp.githubLink} color={props.colors.imageBackground}></GithubAppButton>
                </div>
        </div>
    )
}