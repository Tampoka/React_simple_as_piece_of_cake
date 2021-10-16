import React, {useState} from "react";

export default {
    title: "useState Demo"
}

export const Example1 = () => {
    console.log("Example")
    const [count, setCount] = useState(0)//[0, function(newValue)]

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
}