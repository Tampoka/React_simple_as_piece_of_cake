import React, {useState} from "react";
import s from "./CustomSelect.module.css"

export type CustomSelectPropsType = {
    selectValue: string
    onChange: (selectValue: string) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function CustomSelect(props: CustomSelectPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onItemClickedHandler = (title: string) => {
        props.onChange(title)
        setCollapsed(true)
    }
    return (
        <div className={s.select_wrapper}>
            <div onClick={() => setCollapsed(!collapsed)} className={s.select_trigger}>{props.selectValue}<span className={s.select_triangle}>&#x25BC;</span></div>
            <div className={s.select_list}>{!collapsed && props.items
                .filter(i => i.title !== props.selectValue)
                .map((i) => {
                    return <div key={i.value} onClick={() => {
                        onItemClickedHandler(i.title)
                    }} className={s.select_item}>{i.title}</div>
                })}
            </div>
        </div>
    )
}