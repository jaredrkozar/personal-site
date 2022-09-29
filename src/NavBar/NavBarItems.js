import Resume from '../Images/Resume-3.pdf'

import { Linkedin, Github, FileEarmarkText, Envelope } from "react-bootstrap-icons";

export const navBarItemList = [
    {
         name: "LinkedIn",
         icon: <Linkedin size={35}/>,
         link: "https://www.linkedin.com/in/jaredkozar/",
     },
     {
        name: "GitHub",
        icon: <Github size={35}/>,
        link: "https://github.com/jaredrkozar",
    },
    {
        name: "Resume",
        icon: <FileEarmarkText size={35}/>,
        link: {Resume},
    },
    {
        name: "Email",
        icon: <Envelope size={35}/>,
        link: "mailto:jared.rkozar@gmail.com",
    },
 ]