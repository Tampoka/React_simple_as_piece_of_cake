import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './CustomSelect2.module.css'

export type CustomSelect2PropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function CustomSelect2(props: CustomSelect2PropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)
    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const expectantElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (expectantElement) {
                        props.onChange(expectantElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main}
                      onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {active &&
                <div className={s.items}>
                    {props.items.map(i => <div key={i.value}
                                               onMouseEnter={() => {
                                                   setHoveredItemValue(i.value)
                                               }}
                                               className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                               onClick={() => {
                                                   onItemClick(i.value)
                                               }}>
                        {i.title}</div>)}
                </div>}
            </div>
        </>
    )
}