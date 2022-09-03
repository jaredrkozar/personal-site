import { Apple, Github, Phone, Tablet, Laptop, Smartwatch } from "react-bootstrap-icons";

const baseButtonStyle = `rounded-lg border border-blue-500 border-2 text-blue-500 gap-2 relative align-middle py-2 px-2 hover:bg-blue-500 hover:text-white`

export function AppStoreButton(props) {
    return (
        <div className={baseButtonStyle}>
        <a href={props.link}>
            <div className="flex items-center gap-2">

            <Apple size={20}/>
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

                <Github size={20}/>
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