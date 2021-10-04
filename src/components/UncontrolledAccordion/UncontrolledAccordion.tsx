import React, {useReducer} from "react";
import "./../../App.css"
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
    /**
     * accordion title
     */
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div className={"accUncontrolled"}>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_CONSTANT})
        }}/>
        {/*<button onClick={() => !collapsed ? setCollapsed(true) : setCollapsed((false))}>TOGGLE</button>*/}
        {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return <h2 onClick={() => {
        props.onClick()
    }} className="accordionTitle">{props.title} </h2>


}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <ul className={"accBody"}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

