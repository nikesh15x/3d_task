import React, { useState, useContext } from "react";
import TextWrapper from "../../Components/TextWrapper";
import { Link } from "react-router-dom";
import HidePassBtn from "../../Components/HidePassBtn";
import Button from "../../Components/Button";
import { UserContext } from "../../context/UserContext";
import userActions from "../../Helpers/userActions";
import Alert from "../../Components/Alert";

function Register() {
  const { setUser, setAuthenticated } = useContext(UserContext);

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
    
  const [hideErr, setHideErr] = useState({
    type: "",
    err: "",
    hidden: true,
  });
  const [showPassword, setShowPassword] = useState(false);

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const setShow = (state) => {
    setShowPassword(state);
  };

  const handleError = () => {
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        if (!userData[key]) {
          console.log(key);
          setUserErr({ [key]: `Please enter your ${key} ` });
          return false;
        }
        if (key == "email" && !regex.test(userData[key])) {
          setUserErr({ [key]: `Please enter a valid ${key} address ` });
          return false;
        }
      }
    }
    return true;
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

  const handleSubmit = async () => {
    if (!checkPassword()) {
      console.log("s");
      setUserErr({ confirmPassword: `Passwords do not match ` });
      return;
    }
    if (handleError() && checkPassword()) {
      try {
        let data = await userActions.register(userData);
        if (data?.response?.data?.status_code == 400) {
          console.log("hello", data.response.data.data);
          setHideErr({
            type: "error",
            hidden: false,
            err: data.response.data.data,
          });
          return;
        }
        console.log(data);
        setUser({
          name: data.data.name,
          _id: data.data._id,
        });
        localStorage.setItem("token", data.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.data.name,
            _id: data.data._id,
          })
        );
        setAuthenticated(true);
      } catch (error) {
        console.log(error);
      }
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

              <HidePassBtn showPassword={showPassword} setShow={setShow} />

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
                className="label-text-alt link link-hover text-sm text-slate-500"
              >
                Already have an account?
              </Link>
            </label>
            <div className="form-control">
              <Button
                title="Register"
                styles="text-white"
                func={handleSubmit}
              />
            </div>
          </div>
        </div>
        {!hideErr.hidden && (
          <Alert
            message={hideErr.err}
            type={hideErr.type}
            hide={hideErr.hidden}
            setHideErr={updateState}
          />
        )}
      </div>
    </div>
  );
}

export default Register;
