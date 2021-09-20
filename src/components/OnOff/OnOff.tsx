import React, {useState} from "react";
import s from "./OnOff.module.css"

const OnOff = () => {
    let [on, setOn] = useState(false)
    return <div className={s.container}>
        <div className={s.on_switch} style={{backgroundColor: on ? 'green' : 'white'}} onClick={() => {
            !on && setOn(true)
        }}>On
        </div>
        <div className={s.off_switch} style={{backgroundColor: !on ? 'red' : 'white'}} onClick={() => {
            on && setOn(false)
        }}>Off
        </div>
        <div className={s.indicator} style={{backgroundColor: on ? 'green' : 'red'}}></div>
    </div>
}

export default OnOff