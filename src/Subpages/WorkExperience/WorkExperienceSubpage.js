import {workList} from "./WorkExperienceList";
import NavBar from "../../NavBar/NavBar";
import {DetailStyle} from "../../Components/TextStyles";
function WorkExperienceSubpage() {
    return (
  
      <div class="w-full bg-inherit relative min-h-screen">
        <div className="flex flex-col fixed w-full bg-inherit z-10">
            <NavBar showBackButton={true}/>
        </div>

        <div className="ml-5 relative mr-5 space-y-10 py-28">
        <DetailStyle mainText="Work Experience" detailText="Here are some of the companies I have worked at in the past" isItalic={false}></DetailStyle>
        {workList.map((user) => (
            <div id={user.id}>
            <h1 className="font-bold text-2xl">{user.role}</h1>
            <h1 className="font-medium text-2xl">{user.company}</h1>
            <h1 className="italic text-2xl">{user.startDate} to {user.endDate}</h1>

            {user.responsibilites.map((responsibilites) => (

                <li key={responsibilites.id} className="text-xl">{responsibilites}</li>
            ))}
            </div>
        ))}
        </div>
      </div>
    );
  }
  
  export default WorkExperienceSubpage;