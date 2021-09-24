import React, {useState} from "react"

type PropsType = {
    onChange: (on: boolean) => void
}
export const OnOff2Uncontrolled = (props: PropsType) => {
    let [on, setOn] = useState(true)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "green" : "white"

    };
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: !on ? "red" : "white"

    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked = () => {
        !on && setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        on && setOn(false)
        props.onChange(false)
    }
    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={ofStyle} onClick={offClicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

