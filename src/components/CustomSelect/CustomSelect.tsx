import React, {MouseEventHandler, useState} from "react";

type CustomSelectPropsType = {
    selectValue: string
    onChange: (selectValue: string) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}

export function CustomSelect(props: CustomSelectPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
/*    const onItemClickedHandler=(i)=>{
        props.onChange(i.title)
        setCollapsed(true)
    }*/
    return (
        <div>
            <div onClick={() => setCollapsed(!collapsed)}>{props.selectValue}</div>
            {!collapsed && props.items
                .filter(i=>i.title!==props.selectValue)
                .map(i => <div key={i.value} onClick={()=> {
                    props.onChange(i.title);
                    setCollapsed(true)
                }}>{i.title}</div>)}
        </div>
    )
}