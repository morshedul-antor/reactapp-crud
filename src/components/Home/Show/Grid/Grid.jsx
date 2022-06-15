import React from "react";
import classes from "./Grid.module.css";
import Pic from "../../../../assets/pic.png";

export default function Grid({ users }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {users &&
          users.map((data) => (
            <div className={classes.containerFlex}>
              <img src={Pic} alt="" />
              <h6>{data.name}</h6>
              <span>{data.degree}</span>
              <div>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <span>{data.address}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
