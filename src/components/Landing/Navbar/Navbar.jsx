import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { login, logout } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";
import { refreshPage } from "../../../utils/refreshPage";

export default function Navbar() {
  const state = JSON.parse(localStorage.getItem("state"));
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <div>
          <div className={classes.logo}>
            <Link to="/landing">CRUD Application</Link>
          </div>
          <div className={classes.navList}>
            <Link to="/">Home</Link>
            {state.auth === true ? (
              <Link
                to="/"
                onClick={() => {
                  dispatch(logout());
                  refreshPage();
                }}
              >
                Logout
              </Link>
            ) : (
              <Link to="/" onClick={() => dispatch(login())}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
