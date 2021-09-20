import React, {useState} from "react";
import "./../../App.css"

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    const collapseHandler=()=>{
        setCollapsed(!collapsed)
    }
    return <div className={"accUncontrolled"}>
        <AccordionTitle title={props.titleValue} collapseHandler={collapseHandler}/>
        {/*<button onClick={() => !collapsed ? setCollapsed(true) : setCollapsed((false))}>TOGGLE</button>*/}
        {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapseHandler:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle is rendering')
    return <h2 onClick={props.collapseHandler}>{props.title} </h2>


}

function AccordionBody() {
    // console.log('AccordionBody is rendering')
    return <ul className={"accBody"}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UncontrolledAccordion