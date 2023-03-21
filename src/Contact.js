import { HeaderTextStyle } from "./components/TextStyles"

function Contact() {
    return (
        <div className="">
            <HeaderTextStyle title="Contact" bgStyle="bg-navyBlue-400 dark:bg-navyBlue-500" description=""></HeaderTextStyle>
        
            <h1 className="md:text-3xl text-2xl font-regular dark:text-white">If you would like to collaborate on a project or have any questions, feel free to email me at <a className="text-navyBlue-400 dark:text-navyBlue-500 underline" href = "mailto:jared.rkozar@gmail.com">jared.rkozar@gmail.com</a> or connect on LinkedIn</h1>
        </div>
    )
}

export default Contact; 