export function TechList(props) {
    const listStyle = "space-x-3 rounded-lg relative h-fit w-fit p-4 flex flex-row justify-center items-center " + props.colorStyles

    return (
        <div className="pt-4 relative">
            <h1 className="text-3xl text-black dark:text-white font-medium">{props.title}</h1>
            <div className="flex flex-row flex-wrap space-x-4 space-y-4 justify-start space-x-2 items-end">
            {props.array.map((tech) =>
                <div className={listStyle + ""} key={tech.name}>
                    <h3 className={props.textStyles + " text-4xl"}>{tech.icon}</h3>
                    <h1 className={"text-3xl font-medium space-x-12 " + props.textStyles}>{tech.name}</h1>
                </div>
            )}
        </div>
        </div>
    )
}