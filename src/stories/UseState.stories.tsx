import React, {useMemo, useState} from "react";

export default {
    title: "useState Demo"
}

function generateData (){
//    complex calculation
    console.log('generateData')
    return 1
}
export const Example1 = () => {
    console.log("Example")

    // const initValue=useMemo(generateData,[])

    const [count, setCount] = useState(generateData)//[0, function(newValue)]

    const changer=(state:number)=>state+1

    return <>
        <button onClick={() => setCount((state)=>state+1)}>+</button>
    </>
}