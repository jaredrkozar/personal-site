import { HeaderTextStyle } from "./components/TextStyles"

function Education() {
    return (
        <div className="">
            <HeaderTextStyle title="Education" bgStyle="bg-red-400 dark:bg-red-600">
                <h1 className="md:text-3xl text-2xl font-regular text-black dark:text-white">I graduated from the <a className="text-red-400 dark:text-red-600 underline" href = "https://www.hartford.edu"  aria-label="University of Hartford web site" target="_blank" rel="noreferrer">University of Hartford</a> in 2023, where I majored in Computer Science and Web Design, with a 3.88 GPA (summa cum laude).</h1>
            </HeaderTextStyle>
        </div>
    )
}

export default Education; 