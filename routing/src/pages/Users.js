import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id} onClick={user.name}></Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Users;
