import React from "react";
import TextWrapper from "../../Components/TextWrapper";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold"> {TextWrapper("Login")} now!!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover text-sm">
                Create Account?
              </Link>
            </label>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
