import React, { useState } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // [1
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      const user = await client.signUp({ username, password });
      navigate("/project/account");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <h1>Sign Up</h1>
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
      <button className="btn btn-success" onClick={signUp}>
        Sign Up
      </button>
      <Link to="/project/signin">Sign In</Link>
    </div>
  );
}

export default SignUp;
