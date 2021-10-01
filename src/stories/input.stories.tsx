import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'Input/input'
}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackedValue = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/>---{value}--</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        // const el=document.getElementById("inputId") as HTMLInputElement
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} id={"inputId"}/>
        <button onClick={save}>save</button>
        -actual value: {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={"google"}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)

    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox=()=>{
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)

    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect=()=>{

}


