import { HeaderTextStyle } from "./components/TextStyles"

function Experience() {
    const experienceList =[
        {
          positionName: "Technology Leadership Development Program Intern",
          companyName: "Travelers Insurance",
          startDate: "June 2022",
          endDate: "August 2022",
          responsibilities: [
            "Wrote a script using Node and Express to collect data from 4 internal services for debugging user accounts.",
            "Leveraged AWS Lambda to migrate Node.js backend service to a cloud-based architecture, removing the need to pull from a developer's local machine.",
            "Designed a UI using CSS and React so engineers can easily debug user accounts without having to run a script."
        ]
        },
        {
            positionName: "Technology Leadership Development Program Intern",
            companyName: "Travelers Insurance",
            startDate: "June 2022",
            endDate: "August 2022",
            responsibilities: [
              "Wrote a script using Node and Express to collect data from 4 internal services for debugging user accounts.",
              "Leveraged AWS Lambda to migrate Node.js backend service to a cloud-based architecture, removing the need to pull from a developer's local machine.",
              "Designed a UI using CSS and React so engineers can easily debug user accounts without having to run a script."
          ]
          },
          {
            positionName: "Technology Leadership Development Program Intern",
            companyName: "Travelers Insurance",
            startDate: "June 2022",
            endDate: "August 2022",
            responsibilities: [
              "Wrote a script using Node and Express to collect data from 4 internal services for debugging user accounts.",
              "Leveraged AWS Lambda to migrate Node.js backend service to a cloud-based architecture, removing the need to pull from a developer's local machine.",
              "Designed a UI using CSS and React so engineers can easily debug user accounts without having to run a script."
          ]
          }
       ]

       return (
        <div className="relative">
            <HeaderTextStyle title="Experience" bgStyle="bg-blue-600 dark:bg-blue-500" description="Here are some of the companies I have worked at in the past: "></HeaderTextStyle>

            <ol className="relative top-6 border-l-8 rounded-lg border-gray-200 border-blue-600 dark:border-blue-400">                  
    {experienceList.map((number, id) =>
        <div className="group" key={id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-800 dark:bg-blue-500 last:bg-black rounded-full -left-4 ring-4 ring-blue-800 dark:ring-blue-500 group-first:dark:ring-white group-first:ring-blue-400"></span>
            <li className="mb-10 ml-4 bg-slate-300 dark:bg-slate-700 first:bg-white p-4 rounded-lg w-1/2 dark:text-white text-black ">
                <h1 className="font-bold dark:text-white text-2xl">{number.positionName}</h1>
                <h1 className="font-semibold italic text-xl">{number.companyName}</h1>
                <h1 className="text-xl">{number.startDate + "-" + number.endDate}</h1>
                {number.responsibilities.map((responsibility, id) =>
                    <li className="list-inside list-disc text-xl" key={id}>{responsibility}</li>
                )}
            </li>
            </div>
    )}
</ol>
        </div>
       )
}

export default Experience;