import React from 'react'
import {Link} from "react-router";
const User = () => {
  const users = [
    { id: 1, name: "John", age:"25" },
    { id: 2, name: "Jane", age: "32"},
  ];

  return (
    <>
      <div>User</div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <ul>
              <li>
                <Link to={`${user.id}`}>
                {user.id + "." + user.name}
              </Link>
            </li>
          </ul>
          </div>
        ))}
    </div >
    </>
  )
}

export default User