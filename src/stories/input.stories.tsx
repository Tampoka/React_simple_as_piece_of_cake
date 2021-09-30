import React, {useRef, useState} from 'react';


export default {
    title: 'Input/input'
}

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    }/>---{value}--</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef=useRef<HTMLInputElement>(null)
    const save=() => {
        // const el=document.getElementById("inputId") as HTMLInputElement
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} id={"inputId"}/>
        <button onClick={save}>save</button>-actual value: {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={"google"}/>


