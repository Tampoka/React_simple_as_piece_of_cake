import React, {useState} from "react";
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
    const [active, setActive]=useState<boolean>(false)

    const selectedItem = props.items.find(i => i.value === props.value)

    const toggleItems=()=>setActive(!active)

    const onItemClick=(value:any)=>{
        props.onChange(value)
        toggleItems()
    }
    return (
        <>
            <div className={s.select+' '+s.active}>
                <span className={s.main}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active&&
                <div className={s.items}
                     onClick={onItemClick}>
                    {props.items.map(i => <div key={i.value}
                    className={s.item+' '+(selectedItem===i?s.selected:'')}>{i.title}</div>)}
                </div>}
            </div>
        </>
    )
}