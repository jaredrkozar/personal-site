import Resume from "../images/Resume-5.pdf"
import { BsGithub } from "react-icons/bs";

export function NavbarButton(props) {
    return (
        <div className="flex dark:text-white text-black rounded-lg relative bg-transparent hover:bg-slate-400/50 dark:hover:bg-white/20 hover:text-lg items-center justify-start">
            <a className="inline-flex w-full h-full" href = {props.item.name === "Resume" ? Resume : props.item.link} aria-label={props.item.name} target="_blank" rel="noreferrer">
                <div className="flex transform transition duration-500 hover:scale-105 p-2 gap-8 md:gap-3 flex justify-center items-center">
                    <h1 className="text-3xl">{props.item.icon}</h1>
                    <h1 className="text-2xl">{props.item.name}</h1>
                </div>
            </a>
        </div>
    )
}

export function GithubAppButton(props) {
    var hoverState = "transform transition duration-500 p-2 flex items-center justify-center rounded-xl md:rounded-2xl border-2 md:border-4 group-hover: " + props.color
    return (
        <div className={hoverState} key={props.key}>
            <a className="h-full w-full" href = {props.link} aria-label={props.alt}>
                <div className="dark:group-hover:mix-blend-difference">
                    <h1 className="text-5xl md:text-6xl group"><BsGithub/></h1>
                </div>
            </a>
        </div>
    )
}