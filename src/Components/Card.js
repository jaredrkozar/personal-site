import { TechListSmall } from "./TechList";
import { GithubAppButton } from "./Buttons";

export function Card(props) {
    
    let classstr = "content-center relative p-4 h-fit w-fit " + props.colors.opaqueBackground + " rounded-2xl flex flex-col dark:text-white text-black";

    return (
        <div className={classstr}>
            <div className="flex flex-row align-center relative space-x-20 md:space-x-24">
                {props.currentApp.icon ? <img class="object-cover h-16 w-16 md:h-20 md:w-20 absolute rounded-xl" src={props.currentApp.icon} alt="icon"></img> : null}
            
                <div className="flex flex-col relative space-y-1 w-full bottom-1.5">
                    <h1 className={"md:text-4xl text-2xl " + props.colors.fullText}>{props.currentApp.name}</h1>
                    <h1 className={"flex-none w-fit text-center md:text-2xl text-lg border-solid p-1 md:p-1.5 rounded-lg font-semibold text-white " + props.colors.fullBackground}>{props.currentApp.language}</h1>
                </div>
            </div>
            <img class="pb-4 pt-4 h-80 w-100 object-contain relative rounded-md block dark:hidden" src={props.currentApp.lightScreenshots} alt="app screenshot"></img>
            <img class="pb-4 pt-4 h-80 w-100 object-contain relative rounded-md hidden dark:block" src={props.currentApp.darkScreenshots} alt="app screenshot"></img>

            <h1 className="md:text-2xl text-xl w-full">{props.currentApp.description}</h1>

            <TechListSmall title="Technologies Used:" array={props.currentApp.technologies}></TechListSmall>
            <div className="absolute top-4 right-4">
                    <GithubAppButton link={props.currentApp.githubLink} color={props.colors.imageBackground} alt={"Github link for " + props.currentApp.name}></GithubAppButton>
                </div>
        </div>
    )
}