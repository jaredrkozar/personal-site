import { HeaderTextStyle } from "./components/TextStyles"
import { TechList } from "./components/TechList"
import { SiSwift, SiCplusplus, SiPython, SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiMysql, SiTailwindcss, SiCss3 } from "react-icons/si";
import { DiJava } from "react-icons/di";

function Skills() {
  const languagesList = [
    {
         name: "Swift",
         icon: <SiSwift/>,
     },
     {
      name: "Java",
      icon: <DiJava size={36}/>,
    },
    {
      name: "C++",
      icon: <SiCplusplus/>,
    },
    {
      name: "Python",
      icon: <SiPython/>,
    }
 ]

 const frontEndList =[
  {
    name: "React.js",
    icon: <SiReact/>,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>,
  },
  {
    name: "HTML",
    icon: <SiHtml5/>,
  },
  {
    name: "CSS",
    icon: <SiCss3/>,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript/>,
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

            <HeaderTextStyle title="Skills" bgStyle="bg-green-600 dark:bg-green-600">
            <h1 className="md:text-3xl text-2xl font-regular text-black dark:text-white">Below are some of the languages, libraries and tools I work with:</h1>
            </HeaderTextStyle>

            <TechList title="Languages" array={languagesList} colorStyles="bg-green-600/30 dark:bg-green-500/20" textStyles="text-green-800 dark:text-green-400"/>
            <TechList title="Frontend" array={frontEndList} colorStyles="bg-red-600/30 dark:bg-red-500/25" textStyles="text-red-800 dark:text-red-300"/>
            <TechList title="Backend" array={backEndList} colorStyles="bg-blue-700/25 dark:bg-blue-500/20" textStyles="text-blue-800 dark:text-blue-300"/>
            <TechList title="Tools" array={toolsList} colorStyles="bg-yellow-400/50 dark:bg-yellow-500/20" textStyles="text-yellow-700 dark:text-yellow-300"/>
            </div>
        </div>
     </div>
  );
}

export default Skills;