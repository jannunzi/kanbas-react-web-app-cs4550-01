import * as client from "./client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); // [1
  const { id } = useParams();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  const fetchCurrentUser = async () => {
    const user = await client.account();
    setCurrentUser(user);
  };
  useEffect(() => {
    fetchUser();
    fetchCurrentUser();
  }, []);
  return (
    <div className="container">
      <h1>User Details</h1>
      {currentUser?.role === "ADMIN" && (
        <>
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            value={user?.username}
            className="form-control"
          />
          <button onClick={() => client.updateUser(user._id, user)}>
            Save
          </button>
        </>
      )}
      {currentUser?.role !== "ADMIN" && <>Username: "{user?.username}</>}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
}

export default UserDetails;
