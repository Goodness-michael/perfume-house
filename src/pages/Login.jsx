import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim || !password.trim()) {
      // show error
      setError("all fields are required");
    } else {
      // redirect
      redirect("/dashboard");
    }
  };

  return (
    <div className="register-container">
      <div className="register">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-50 my-5 p-5 rounded-2 bg-white  "
        >
          <h2 className="fs-5">Get started</h2>
          <p>lets get started by filling out the information below</p>
          <p className="text-danger">{error}</p>
          <div className="fncontainer d-flex mb-3 justify-content-between">
            <div>
              <p>First name</p>
              <input
                type="text"
                placeholder="first name"
                className="form-control mb-2"
              />
            </div>
            <div>
              <p>Last name</p>
              <input
                type="text"
                placeholder="last name"
                className="form-control mb-2"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Email adress"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="form-control mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="confirm password"
            className="form-control mb-2"
          />
          <div className="my-4">
            <input type="checkbox" /> <span>i agree to the </span>{" "}
            <strong id="sign">terms of service</strong> and{" "}
            <strong id="sign">privacy policies</strong>
          </div>

          <button className="btn btn-primary w-100 my-25" id="btn1">
            Sign up
          </button>
          <p className="or">or</p>
          <button id="btn2">continue with google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
