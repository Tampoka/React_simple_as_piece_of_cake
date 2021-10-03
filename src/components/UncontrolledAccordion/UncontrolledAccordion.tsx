import React, {useReducer, useState} from "react";
import "./../../App.css"

type UncontrolledAccordionPropsType = {
    titleValue: string
    /**
     * accordion title
     */
}

type ActionType={
    type:string
}
const reducer=(state:boolean,action:ActionType)=>{
  if(action.type==="TOGGLE-COLLAPSED"){
      return !state
  }

    return state
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer,false)

    return <div className={"accUncontrolled"}>
        <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {/*<button onClick={() => !collapsed ? setCollapsed(true) : setCollapsed((false))}>TOGGLE</button>*/}
        {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return <h2 onClick={()=>{props.onClick()}} className="accordionTitle">{props.title} </h2>


}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return <ul className={"accBody"}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

