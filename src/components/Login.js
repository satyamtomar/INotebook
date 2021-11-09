import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://inotebooksatyam.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();

    console.log(json);
    if (json.success) {
      //save the auth token and redirect it
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Loggedin successfully", "success");
      history.push("/");
     
      
    }
     else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-3">
    <h1>Login to your notes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={credential.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={onChange}
            value={credential.password}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
