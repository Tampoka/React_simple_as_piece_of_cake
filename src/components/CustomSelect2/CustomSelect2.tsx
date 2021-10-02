import React from "react";
import s from './CustomSelect2.module.css'

export type CustomSelect2PropsType = {
    value?: string
    onChange: (Value: string) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function CustomSelect2(props: CustomSelect2PropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <>
            <select name="" id="">
                <option value="">Me</option>
                <option value="">You</option>
                <option value="">We</option>
            </select>
            <div className={s.select+' '+s.active}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={s.items}>
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
            </div>
        </>
    )
}