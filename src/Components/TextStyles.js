export function HeaderTextStyle(props) {
    return (
        <div className="text-white space-y-4">
            <div className={"w-fit h-fit p-2 rounded-lg "+ props.bgStyle}>
                <h1 className="md:text-4xl text-3xl font-semibold">{props.title}</h1>
            </div>
            {props.children}
        </div>
    )
};