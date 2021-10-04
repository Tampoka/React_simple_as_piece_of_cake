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
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['John', 'Bob', 'Kate', 'Ann'])

    const addUser = () => {
        // users.push('Alex'+new Date().getTime())
        const newUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}