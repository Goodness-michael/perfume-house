import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Register = () => {
  const [email, setEmail] = useState("");

  const [password, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, fullname);
    // perform any action
    if (!email.trim() || !username.trim() || !fullname() || !agree) {
      //   console.log("fill all field");
      setError("please fill all fields");

      // clear your input field all actions
      setEmail("");
      setFullname("");
      password("");
      setAgree("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto my-5 shadow-lg p-5">
      <h1 className="fs-5">Welcome back</h1>
      <p>fill your information to acess your account</p>
      <p className="text-danger"> {Error} </p>

      {/* <label htmlFor="fullname" className="form-label">
        Fullname
      </label>
      <input
        type="text"
        className="form-control"
        id="fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      /> */}

      {/* <input type="checkbox" className="form-check-input mt-2" checked={agree} onChange={e}/> */}

      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
        type="email"
        className="form-control"
        id="email" placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="form-label">
        {" "}
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="Password" placeholder="Enter your password"
        value={password}
        onChange={(e) => password(e.target.value)}
      />
      <input type="checkbox"  id="btn1"/> <span>Remind me</span>
      <button type="submit" className="my-3 d-block btn w-100" id="btn1">
        Sign In
      </button>
      <p className="or">Or</p>
      <button id="btn2">continue with google</button>
      <p className="or">Dont have an account? <strong id="sign">Sign in</strong> </p> 
    </form>
  );
};

export default Register;
