import PersonIcon from  "../Images/personIcon.png";
import { Person, Star, Briefcase } from "react-bootstrap-icons";


export const infoList = {
    "aboutme": {
        name: "About Me",
        language: '',
        appIcon: <Person size={50}/>,
        shortDescription: 'You can learn more about me and my hobbies here.',
        firstColor: 'from-red-400',
        secondColor: 'to-red-700'
    },
    "skills": {
        name: "Skills",
        language: '',
        appIcon: <Star size={45}/>,
        shortDescription: 'You can view all the programming languages, styles, and other skills here.',
        firstColor: 'from-orange-400',
        secondColor: 'to-orange-700'
    },
    "workexperience": {
        name: "Work Experience",
        language: '',
        appIcon: <Briefcase size={45}/>,
        shortDescription: "You can check out the companies I've worked for, such as Travelers insurance, here.",
        firstColor: 'from-yellow-400',
        secondColor: 'to-yellow-700'
    },
};