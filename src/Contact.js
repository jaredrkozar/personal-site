import { HeaderTextStyle } from "./components/TextStyles"

function Contact() {
    return (
        <div className="">
            <HeaderTextStyle title="Contact" bgStyle="bg-sky-700 dark:bg-sky-600">
            <h1 className="md:text-3xl text-2xl font-regular text-black dark:text-white">If you would like to collaborate on a project or have any questions, feel free to email me at <a className="text-sky-600 dark:text-sky-500 underline" href = "mailto:jared.rkozar@gmail.com">jared.rkozar@gmail.com</a> or <a className="text-sky-600 dark:text-sky-500 underline" href = "https://www.linkedin.com/in/jaredkozar/">connect with me on LinkedIn</a>.</h1>
            </HeaderTextStyle>
        </div>
    )
}

export default Contact; 