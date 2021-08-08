import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    }
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return <h2>{props.title}</h2>


}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default Accordion