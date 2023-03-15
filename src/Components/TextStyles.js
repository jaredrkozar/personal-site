export function HeaderTextStyle(props) {
    const headerStyle = "w-fit h-fit p-2 rounded-lg "+ props.bgStyle

    return (
        <div className="text-white space-y-4">
            <div className={headerStyle}>
                <h1 className="text-4xl font-bold">{props.title}</h1>
            </div>
            <h3 className="text-3xl font-regular text-black dark:text-white">{props.description}</h3>
        </div>
    )
};