import React from "react";
import classes from "./Delete.module.css";
import { refreshPage } from "../../../../../utils/refreshPage";

export default function Delete({ setDeleteHide, index, data, api }) {
  const deleteItem = async (value) => {
    let deleteFetch = await fetch(`${api}/users/${value}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (deleteFetch.ok) {
      refreshPage();
    }
  };

  return (
    <div key={() => index} className={classes.containerPopup}>
      <div className={classes.formWrapper}>
        <div className={classes.close} onClick={() => setDeleteHide(false)}>
          &times;
        </div>

        <div className={classes.buttonContainer}>
          <button
            className={classes.button}
            onClick={() => {
              deleteItem(data.id);
            }}
          >
            Delete
          </button>

          <button
            className={classes.button}
            onClick={() => setDeleteHide(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
