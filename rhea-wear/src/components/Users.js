import React, { useState, useEffect } from "react";
import axios from "./axiosApi.js";
import useRefreshToken from "../hooks/useRefreshToken.js";

function Users() {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      <article>
        <h2>Users List</h2>
        {users?.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username} </li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
        <button onClick={() => refresh()}> Refresh</button>
        <br />
      </article>
    </div>
  );
}

export default Users;
