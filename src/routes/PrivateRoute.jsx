import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const state = JSON.parse(localStorage.getItem("state"));

  return state.auth === true ? <Outlet /> : <Navigate to="/landing" />;
}
