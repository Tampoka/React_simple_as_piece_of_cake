import React from "react";
import s from "./OnOff.module.css"

type OnOffPropsType={
    isOn:boolean
}
const OnOff = (props:OnOffPropsType) => {
    return <div className={s.container}>
        <div className={s.on_switch} style={{backgroundColor:props.isOn?'green':'none'}}>On</div>
        <div className={s.off_switch} style={{backgroundColor:!props.isOn?'red':'none'}}>Off</div>
        <div className={s.indicator} style={{backgroundColor:props.isOn?'green':'red'}}></div>
    </div>
}

export default OnOff