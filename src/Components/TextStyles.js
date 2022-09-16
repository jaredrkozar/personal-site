function TitleStyle(props) {
    return (
        <div className={`text-5xl font-bold`}>
            <h3>{props.mainText}</h3>
        </div>
    )
};

function BodyStyle(props) {
    return (
        <div className={`py-4 text-3xl font-regular ${props.isItalic ? 'italic' : ''}`}>
            <h3>{props.detailText}</h3>
        </div>
    )
};

export function DetailStyle(props) {
    return (
        <div className="">
            <TitleStyle mainText={props.mainText}></TitleStyle>
            <BodyStyle detailText={props.detailText} isItalic={props.isItalic}></BodyStyle>
        </div>
    )
};



