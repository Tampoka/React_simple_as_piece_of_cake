import React, {useReducer} from "react";
import "./../../App.css"

type UncontrolledAccordionPropsType = {
    titleValue: string
    /**
     * accordion title
     */
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
const reducer = (state: boolean, action: ActionType) => {
    /*    console.log("reducer started ")
        console.log(state)
        console.log(action)
        console.log("reducer ended")*/
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error("Bad action type")
    }
    return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div className={"accUncontrolled"}>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_CONSTANT})
        }}/>
        {/*<button onClick={() => !collapsed ? setCollapsed(true) : setCollapsed((false))}>TOGGLE</button>*/}
        {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
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

