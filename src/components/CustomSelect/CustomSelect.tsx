import React, {useState} from "react";

type CustomSelectPropsType={
    defaultValue?:string
    onChange:(value:any)=>void
    items:ItemType[]
}

type ItemType = {
    title: string
    value: any
}

export function CustomSelect(props:CustomSelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}