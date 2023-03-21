export function HeaderTextStyle(props) {
    const headerStyle = "w-fit h-fit p-2 rounded-lg "+ props.bgStyle

    return (
        <div className="text-white space-y-4">
            <div className={headerStyle}>
                <h1 className="md:text-4xl text-3xl font-bold">{props.title}</h1>
            </div>
            <h3 className="md:text-3xl text-2xl font-regular text-black dark:text-white">{props.description}</h3>
        </div>
    )
};