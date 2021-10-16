import React, {useMemo, useState} from "react";

export default {
    title: "useState Demo"
}

function generateData (){
//    complex calculation
    console.log('generateData')
    return 4449303923232321
}
export const Example1 = () => {
    console.log("Example")

    const initValue=useMemo(generateData,[])

    const [count, setCount] = useState(initValue)//[0, function(newValue)]

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
}