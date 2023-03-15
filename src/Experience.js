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
          }
       ]

       return (
        <div className="relative">
            <HeaderTextStyle title="Experience" bgStyle="bg-blue-600 dark:bg-blue-500" description="Here are some of the companies I have worked at in the past: "></HeaderTextStyle>

            <ol class="relative border-l-8 border-gray-200 dark:border-gray-700">                  
    {experienceList.map((number) =>
        <li class="mb-10 ml-4">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-300 first:bg-yellow-300 dark:bg-green-300 rounded-full -left-4 ring-2 ring-gray dark:ring-white"></span>
        <h1 className="font-bold text-black dark:text-white">{number.positionName}</h1>
                <h1 className="font-semibold italic dark:text-white">{number.companyName}</h1>
                <h1 className="text-black dark:text-white">{number.startDate + "-" + number.endDate}</h1>
                {number.responsibilities.map((responsibility) =>
                <li className="list-inside list-disc text-black dark:text-white">{responsibility}</li>
                )}
    </li>
    )}
</ol>
        </div>
       )
}

export default Experience;