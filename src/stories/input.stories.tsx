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
    const inputRef=useRef(null)
    return <><input id={"inputId"}/>
        <button onClick={() => {
            const el=document.getElementById("inputId") as HTMLInputElement
            setValue(el.value)
        }}>save
        </button>
        -actual value: {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={"google"}/>


