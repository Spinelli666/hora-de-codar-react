import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Bernardo", "João", "Maria"])

    const [users, setUsers] = useState([
        {id: 1, name: "Bernardo", age: 22},
        {id: 2, name: "Carlos", age: 16},
        {id: 3, name: "Maria", age: 19},
    ])

  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender