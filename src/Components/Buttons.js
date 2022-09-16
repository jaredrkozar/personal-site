import { Apple, Github, Phone, Tablet, Laptop, Smartwatch, ChevronLeft } from "react-bootstrap-icons";
import MemojiIcon from  "../Images/Memoji.png";

const baseButtonStyle = `rounded-lg border border-blue-500 border-2 text-blue-500 gap-2 relative align-middle py-2 px-2 hover:bg-blue-500 hover:text-white`

export function AppStoreButton(props) {
    return (
        <div className={baseButtonStyle}>
        <a href={props.link}>
            <div className="flex items-center gap-2">

            <Apple size={25}/>
            <h2>Download on App Store</h2>
            </div>
        </a>
    </div>
    )
};

export function GithubButton(props) {
    return (
        <div className={baseButtonStyle}>
            <a href={props.link}>
                <div className="flex items-center gap-2">

                <Github size={25}/>
                <h2>View on GitHub</h2>
            </div>
        </a>
        </div>
    )
};

export function IPhoneButton(props) {
    return (
        <div className={baseButtonStyle} onClick={props.onClick}>
         <div className="flex items-center gap-2">

         <Phone size={20}/>
        <h2>iPhone</h2>
        </div>
    </div>
    )
};

export function IPadButton(props) {
    return (
        <div className={baseButtonStyle} onClick={props.onClick}>
         <div className="flex items-center gap-2">

         <Tablet size={20}/>
        <h2>iPad</h2>
        </div>
    </div>
    )
};

export function MacButton(props) {
    return (
        <div className={baseButtonStyle} onClick={props.onClick}>
         <div className="flex items-center gap-2">

        <Laptop/>
        <h2>Mac</h2>
        </div>
    </div>
    )
};

export function WatchButton(props) {
    return (
        <div className={baseButtonStyle} onClick={props.onClick}>
         <div className="flex items-center gap-2">

        <Smartwatch/>
        <h2>Apple Watch</h2>
        </div>
    </div>
    )
};

export function NameButton() {
    return (
        <div class="relative gap-3">
            <div class="text-2xl font-bold gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
            <img class="object-cover h-14 w-14 rounded-md" src={MemojiIcon}></img>
            <h1 class="hidden md:block lg:block">Jared Kozar</h1>
            </div>
        </div>
    )
};

export function BackButton(props) {
    return (
        <div class="relative gap-3 hover:font-bold stroke-2">
            <a href="/">
            <div class="text-2xl gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
                <ChevronLeft size={30}/>
                <h1 class="hidden md:block lg:block">Back</h1>
            </div>
            </a>
        </div>
    )
};

export function AppInfo(props) {
    return (
        <div class="sm:invisible md:visible lg:visible">
            <div className="relative gap-4 flex flex-wrap">
            <img class="object-cover h-20 w-20 rounded-xl" src={props.icon} alt="app icon"></img>
            <div className="grid grid-rows-2 gap-y-2">
                <h1 class="text-3xl font-bold">{props.name}</h1>
                <h1 class="text-xl italic">{props.language}</h1>
                </div>
            </div>
        </div>
    )
};