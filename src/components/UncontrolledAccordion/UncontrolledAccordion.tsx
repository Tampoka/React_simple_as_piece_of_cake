import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => !collapsed?setCollapsed(true):setCollapsed((false))}>TOGGLE
        </button>
        {!collapsed && <AccordionBody/>}
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

export default UncontrolledAccordion