import React from "react";

export type AccordionPropsType = {
    /**
     * Accordion title
     */
    titleValue: string
    /**
     * Callback that is called when any item clicked
     * @param collapsed
     */
    onClick: (value: any) => void
    onChange: (collapsed:boolean) => void
    collapsed: boolean
    items: ItemType[]
}
type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {
    // console.log('Accordion is rendering')

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={()=>{props.onChange(!props.collapsed)}}/>
        {!props.collapsed && <AccordionBody items={props.items}
                                            onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle is rendering')
    return <h3 onClick={()=>props.onChange()}>-{props.title}-</h3>


}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    // console.log('AccordionBody is rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>

}

