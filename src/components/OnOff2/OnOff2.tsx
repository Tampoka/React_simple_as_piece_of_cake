import React from "react"

type OnOff2PropsType = {
    on: boolean
}
const OnOff2 = (props: OnOff2PropsType) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor:props.on?"green":"white"
    };
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor:!props.on?"red":"white"

    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor:props.on?"green":"red"
    };
    return <div>
        <div style={onStyle}>On</div>
        <div style={ofStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff2