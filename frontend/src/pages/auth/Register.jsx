import React, { useState } from "react";
import TextWrapper from "../../Components/TextWrapper";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userErr, setUserErr] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const handleError = () => {
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        if (key == "email" && userData[key]) {
          console.log("Testing email", regex.test(userData[key]));
          !regex.test(userData[key]) &&
            setUserErr({ [key]: `Please enter a valid ${key} address ` });
          return;
        }
        if (!userData[key]) {
          console.log(key);
          setUserErr({ [key]: `Please enter your ${key} ` });
          return;
        }
      }
    }
  };

  const checkPassword = () => {
    return userData?.password === userData?.confirmPassword;
  };

  const resetErr = () => {
    setUserErr({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = () => {
    handleError();
    if (!checkPassword()) {
      setUserErr({ confirmPassword: `Passwords do not match ` });
      return;
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold"> {TextWrapper("Signup")} now!!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body" onFocus={resetErr}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
              {userErr.name && (
                <p className="text-left pt-2 text-red-500">{userErr.name}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              {userErr.email && (
                <p className="text-left pt-2 text-red-500">{userErr.email}</p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />

              <div
                className="absolute right-2 bottom-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>

              {userErr.password && (
                <p className="text-left pt-2 text-red-500">
                  {userErr.password}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                onChange={(e) => {
                  setUserData({ ...userData, confirmPassword: e.target.value });
                }}
              />
              {userErr.confirmPassword && (
                <p className="text-left pt-2 text-red-500">
                  {userErr.confirmPassword}
                </p>
              )}
            </div>
            <label className="label">
              <Link
                to="/login"
                className="label-text-alt link link-hover text-sm"
              >
                Already have an account?
              </Link>
            </label>
            <div className="form-control">
              <button className="btn bg-orange-400" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
