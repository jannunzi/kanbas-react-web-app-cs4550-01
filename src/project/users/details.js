import * as client from "./client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  useState(() => {
    fetchUser();
  }, []);
  return (
    <div className="container">
      <h1>User Details</h1>
      <input
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        type="text"
        value={user?.username}
        className="form-control"
      />
      <button onClick={() => client.updateUser(user._id, user)}>Save</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default UserDetails;
