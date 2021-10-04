import React, {useState} from "react";

export default {
    title: "React.memo Demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users=React.memo(UsersSecret)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['John', 'Bob', 'Kate', 'Ann'])

    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}