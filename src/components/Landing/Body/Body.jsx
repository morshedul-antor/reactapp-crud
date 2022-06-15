import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../../assets/img.png";
import classes from "./Body.module.css";

export default function Body() {
  return (
    <div className={classes.bodyWrapper} id="body">
      <div className={classes.body}>
        <div className={classes.box}>
          <div className={classes.title}>
            <p>React CRUD Application</p>
            <span>React Task</span>
          </div>
          <p>
            Simple Mobile Responsive Create, Read, Update and Delete (CRUD)
            Application using React-Redux
            <span>Note: Click Login Button to Redirect</span>
          </p>
          <div className={classes.buttonContainer}>
            <Link to="/">
              <button>CRUD</button>
            </Link>
          </div>
        </div>

        <div className={classes.box}>
          <img src={IMG} className={classes.img} alt="" />
        </div>
      </div>
    </div>
  );
}
