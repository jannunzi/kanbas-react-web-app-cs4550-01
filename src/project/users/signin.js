import React, { useState } from "react";
import * as client from "./client";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // [1
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const user = await client.signIn({ username, password });
      dispatch(setCurrentUser(user));
      navigate("/project/account");
      //   console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <h1>Sign In</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
        className="form-control"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
        className="form-control"
      />
      <button className="btn btn-success" onClick={signIn}>
        Sign In
      </button>
      <Link to="/project/signup">Sign Up</Link>
    </div>
  );
}

export default SignIn;
