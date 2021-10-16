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
    console.log("USERS Secret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpingReactMemoExample = () => {
    console.log("HelpingReactMemo")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['John', 'Bob', 'Kate', 'Ann'])

    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf("a")>-1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() =>addUser()}>add user</button>
        <Users users={newArray}/>
    </>
}

export const AsUseCallback = () => {
    console.log("AsUseCallback")
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'Bob', 'Kate', 'Ann'])

    const newArray = useMemo(()=>{
        return books.filter(b=>b.toLowerCase().indexOf("a")>-1)
    },[books])

    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Book books={newArray} addBook={addBook}/>
    </>
}

const BooksSecret = (props: { books: Array<string> ,addBook:()=>void}) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() =>props.addBook()}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Book=React.memo(BooksSecret)