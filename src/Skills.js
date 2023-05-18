import { HeaderTextStyle } from "./components/TextStyles"
import { TechList } from "./components/TechList"
import { SiSwift, SiCplusplus, SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";

function Skills() {
  const languagesList = [
    {
         name: "Swift",
         icon: <SiSwift/>,
     },
     {
      name: "Java",
      icon: <DiJava/>,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript/>,
    },
    {
        name: "HTML",
        icon: <SiHtml5/>,
    },
    {
      name: "C++",
      icon: <SiCplusplus/>,
    }
 ]

 const frontEndList =[
  {
    name: "React.js",
    icon: <SiReact/>,
  }
 ]

 const backEndList =[
  {
    name: "Node.js",
      icon: <SiNodedotjs/>,
  },
  {
    name: "Express.js",
    icon: <SiExpress/>,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb/>,
  }
 ]

 const toolsList =[
  {
    name: "Git",
    icon: <SiGit/>,
  },
  {
    name: "MySQL",
    icon: <SiMysql/>
  }
 ]

  return (
    <div className="relative w-full h-fit justify-center items-start">
        <div className="relative flex flex-row">
            <div className="relative mr-10 md:mr-20 flex flex-col">
            <HeaderTextStyle title="Skills" bgStyle="bg-green-600 dark:bg-green-600" description="Below are some of the languages, libraries and tools I work with:"></HeaderTextStyle>

            <TechList title="Languages" array={languagesList} colorStyles="bg-green-600/40 dark:bg-green-500/25" textStyles="text-green-700 dark:text-green-500"/>
            <TechList title="Frontend" array={frontEndList} colorStyles="bg-red-600/30 dark:bg-red-500/30" textStyles="text-red-800 dark:text-red-400"/>
            <TechList title="Backend" array={backEndList} colorStyles="bg-blue-600/40 dark:bg-blue-500/25" textStyles="text-blue-800 dark:text-blue-500"/>
            <TechList title="Tools" array={toolsList} colorStyles="bg-yellow-600/30 dark:bg-yellow-500/25" textStyles="text-yellow-600 dark:text-yellow-500"/>
            </div>
        </div>
     </div>
  );
}

export default Skills;