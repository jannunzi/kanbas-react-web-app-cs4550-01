import * as client from "./client";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as followsClient from "../follows/client";

function Account() {
  const [user, setUser] = useState(null);
  const [following, setFollowing] = useState([]);

  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
      fetchFollowing(user._id);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  const signOut = async () => {
    await client.signOut();
    navigate("/project/signin");
  };
  const updateUser = async () => {
    await client.updateUser(user._id, user);
  };

  const fetchFollowing = async (userId) => {
    const following = await followsClient.findUsersFollowedByUser(userId);
    setFollowing(following);
  };

  useState(() => {
    fetchUser();
  }, []);
  return (
    <div className="container">
      <h1>Account</h1>
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        value={user?.password}
        className="form-control"
      />
      <input
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        type="text"
        value={user?.firstName}
        className="form-control"
      />
      <input
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        type="text"
        value={user?.lastName}
        className="form-control"
      />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={signOut} className="btn btn-danger">
        Sign Out
      </button>
      <button onClick={updateUser} className="btn btn-success">
        Save
      </button>
      {user?.role === "ADMIN" && (
        <Link to="/project/users" className="btn btn-primary">
          Users
        </Link>
      )}
      <h2>Following</h2>
      <div className="list-group">
        {following.map((follows) => (
          <Link
            key={follows.followed._id}
            className="list-group-item"
            to={`/project/users/${follows.followed._id}`}
          >
            {follows.followed.firstName} {follows.followed.lastName} (@
            {follows.followed.username})
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Account;
