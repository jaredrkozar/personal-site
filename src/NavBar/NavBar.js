import React from "react";
import { ReactComponent as GithubIcon } from  "../Images/GithubIcon.svg";
import { ReactComponent as EmailIcon } from  "../Images/EmailIcon.svg";
import { ReactComponent as LinkedInIcon } from  "../Images/LinkedInIcon.svg";
import { ReactComponent as ResumeIcon } from "../Images/resumeIcon.svg";
import MemojiIcon from  "../Images/Memoji.png";
import Resume from '../Images/Resume.pdf'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <nav className="bg-inherit text-inherit flex items-center h-20 relative top-5">
        <div className="w-full flex flex-wrap bg-transparent justify-between px-6">
        
            <div class="relative gap-3">
                <div class="text-2xl font-bold gap-4 flex rounded-md relative bg-transparent space-x-15 flex items-center">
                   <img class="object-cover h-14 w-14 rounded-md" src={MemojiIcon}></img>
                   <h1 class="hidden md:block lg:block">Jared Kozar</h1>
                </div>
                </div>
        


            <div class="flex items-center relative gap-3">

                <div class="rounded-md relative bg-transparent hover:bg-lightBlue dark:hover:bg-slate-900 hover:text-lg stroke-1200 stroke-2 hover:stroke-3 dark:hover:stroke-3">
                    <a href = "https://www.linkedin.com/in/jaredkozar/">
                        <div class="transform transition duration-500 hover:scale-110 flex items-center p-4 gap-2">
                        <FontAwesomeIcon icon={faHome} />
                            <h1 class="hidden md:block lg:block">LinkedIn</h1>
                        </div>
                    </a>
                </div>


                <div class="rounded-md relative align-middle bg-transparent hover:bg-lightBlue dark:hover:bg-slate-900 hover:text-lg stroke-2 hover:stroke-3 dark:hover:stroke-3">
                    <a href = "https://github.com/jaredrkozar">
                    <div class="transform transition align-middle duration-500 hover:scale-110 flex items-center py-2 px-3 gap-2">
                        <GithubIcon/>
                        <h1 class="hidden md:block lg:block">GitHub</h1>
                    </div>
                    </a>
                </div>

                <div class=" rounded-md relative bg-transparent hover:bg-lightBlue dark:hover:bg-slate-900 hover:text-lg stroke-2 hover:stroke-3 dark:hover:stroke-3">
                    <a href={Resume}>
                        <div class="align-middle transform transition duration-500 hover:scale-110 flex items-center py-1 px-2 gap-2">
                            <ResumeIcon/>
                            <h1 class="hidden md:block lg:block">Resume</h1>
                        </div>
                    </a>
                </div>

                <div class="align-middle rounded-md relative bg-transparent hover:bg-lightBlue dark:hover:bg-slate-900 hover:text-lg stroke-2 hover:stroke-3 dark:hover:stroke-3">
                    <a href="mailto:jared.rkozar@gmail.com">
                        <div class="transform transition align-middle duration-500 hover:scale-110 flex items-center py-2 px-2 gap-2">
                        <EmailIcon/>
                            <h1 class="hidden md:block lg:block">Email</h1>
                        </div>
                        </a>
                </div>
             </div>

        </div>
    </nav>
  );
}

export default NavBar;