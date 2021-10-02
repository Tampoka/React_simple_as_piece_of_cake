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
    const selectedItem=props.items.find(i=>i.value===props.value)
    return (
        <div>
            <h3>{selectedItem&&selectedItem.title}</h3>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}