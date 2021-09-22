import React from "react";

type AccordionPropsType = {
    titleValue: string
    onClick:(collapsed:boolean)=>void
    collapsed:boolean
}

function Accordion(props: AccordionPropsType) {
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

export default Accordion