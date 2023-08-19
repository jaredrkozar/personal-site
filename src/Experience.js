import { HeaderTextStyle } from "./components/TextStyles"

function Experience() {
    const experienceList =[
        {
          positionName: "Technology Leadership Development Program Intern",
          companyName: "Travelers Insurance",
          startDate: "June 2022",
          endDate: "August 2022",
          responsibilities: [
            "Wrote a script using Node and Express to collect data from 4 internal services for debugging user accounts",
            "Leveraged AWS Lambda to migrate Node.js backend service to a cloud-based architecture, removing the need to pull from a developer's local machine",
            "Designed a UI using CSS and React so engineers can easily debug user accounts without having to run a script"
        ]
        },
        {
            positionName: "Computer Science Peer Tutor",
            companyName: "University of Hartford",
            startDate: "October 2022",
            endDate: "May 2023",
            responsibilities: [
                "Chosen by the head of CS department to tutor 5 students per week in topics; web development, Java, and data structures",
                "Reviews course material and helps students develop homework and test-taking strategies" 
          ]
          },
          {
            positionName: "CS 220 Data Structures and Algorithms Teaching Assistant",
            companyName: "University of Hartford",
            startDate: "August 2022",
            endDate: "December 2022",
            responsibilities: [
              "Attended all classes and held office hours twice a week to assist students who needed clarification on code and concepts taught in class",
              "Checked student work for completeness, plagiarism and functionality"
          ]
          }
       ]

       return (
        <div className="relative">
            <HeaderTextStyle title="Experience" bgStyle="bg-orient-800 dark:bg-orient-700">
                <h1 className="md:text-3xl text-2xl font-regular text-black dark:text-white">Here are some of the companies I have worked at in the past: </h1>
            </HeaderTextStyle>

            <div className="relative top-6 border-l-8 rounded-lg border-orient-600 dark:border-orient-700">                  
    {experienceList.map((job) =>
        <div className="group" key={job.positionName}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-orient-700 dark:bg-orient-800 group-first:bg-orient-700 last:bg-black rounded-full -left-4 ring-4 ring-orient-700 dark:ring-orient-800 group-first:dark:ring-white group-first:ring-orient-500"></span>
            <div className="mb-10 ml-10 bg-slate-300 dark:bg-slate-700 first:bg-white p-4 rounded-lg w-fit md:w-8/12 dark:text-white text-black ">
                <h1 className="font-semibold dark:text-white md:text-3xl text-2xl">{job.positionName}</h1>
                <h1 className="font-medium italic md:text-3xl text-2xl">{job.companyName}</h1>
                <h1 className="md:text-3xl text-2xl">{job.startDate + "-" + job.endDate}</h1>
                <ul>
                {job.responsibilities.map((responsibility, id) =>
                    <li className="list-inside list-disc md:text-2xl text-xl" key={id}>{responsibility}</li>
                )}
                </ul>
            </div>
            </div>
    )}
</div>
        </div>
       )
}

export default Experience;