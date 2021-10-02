import React, {useState} from "react";
import s from "./CustomSelect2.module.css"

export type CustomSelect2PropsType = {
    value: string
    onChange: (Value: string) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function CustomSelect2(props: CustomSelect2PropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onItemClickedHandler = (title: string) => {
        props.onChange(title)
        setCollapsed(true)
    }
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}