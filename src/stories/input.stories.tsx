import React, {useState} from 'react';


export default {
    title: 'Input/input'
}

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue]=useState('')
    return <><input onChange={(e)=>{
    const actualValue=e.currentTarget.value
    setValue(actualValue)}
    }/>---{value}--</>
}
export const ControlledInputWithFixedValue = () => <input value={"google"}/>


