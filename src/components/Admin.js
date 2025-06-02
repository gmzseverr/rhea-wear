import React from "react";
import Users from "./Users";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin's Page</h1>
      <br />
      <Users />
      <br />
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Admin;
