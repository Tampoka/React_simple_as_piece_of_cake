import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const ComplexCalculationExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

       resultA= useMemo(()=>{
           let tempResultA=1
    for (let i = 1; i <= a; i++) {
        let fake=0
        while(fake<1000000){
            fake++
            const fakeValue=Math.random()
        }
        tempResultA *= i
    }
           return tempResultA
       },[a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}



const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpingReactMemoExample = () => {
    console.log("Example")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['John', 'Bob', 'Kate', 'Ann'])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Users users={users}/>
    </>
}