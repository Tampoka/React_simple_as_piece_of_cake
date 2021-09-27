import React from "react";

export type AccordionPropsType = {
    titleValue: string
    onClick:(collapsed:boolean)=>void
    collapsed:boolean
}
const items=[{title:"John", value:3},{title:"Bob",value:45},{title:"Kate", value:7}]
 export function Accordion(props: AccordionPropsType) {
    // console.log('Accordion is rendering')

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick:(collapsed:boolean)=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle is rendering')
    return <h2 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h2>


}

function AccordionBody() {
    // console.log('AccordionBody is rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

