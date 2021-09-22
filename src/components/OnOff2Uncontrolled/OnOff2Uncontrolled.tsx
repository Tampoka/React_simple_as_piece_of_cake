import React, {useState} from "react"

const OnOff2Uncontrolled = () => {
    let [on,setOn]=useState(true)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor:on?"green":"white"

    };
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor:!on?"red":"white"

    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor:on?"green":"red"
    };
    return <div>
        <div style={onStyle} onClick={()=>!on&&setOn(true)}>On</div>
        <div style={ofStyle} onClick={()=>on&&setOn(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff2Uncontrolled