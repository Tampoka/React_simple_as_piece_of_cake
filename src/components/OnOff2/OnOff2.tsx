import React from "react"

export type OnOfPropsType={
    onClick:(on:boolean)=>void
    on:boolean
}
export const OnOff2 = (props:OnOfPropsType) => {
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
        <div style={onStyle} onClick={()=>!props.on&&props.onClick(true)}>On</div>
        <div style={ofStyle} onClick={()=>props.on&&props.onClick(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

