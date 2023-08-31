import { Navigate, Outlet } from "react-router-dom";

const PushRoute = ({ isLoggedIn }) => {
  return !isLoggedIn ? <Navigate to="/" /> : <Outlet/>;
};

export default PushRoute;
