import React, { useState } from "react";
import classes from "./Table.module.css";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Update from "./Update/Update";
import Delete from "./Delete/Delete";

export default function Table({ users, api }) {
  const [updateHide, setUpdateHide] = useState(false);
  const [deleteHide, setDeleteHide] = useState(false);
  let serial = 0;

  return (
    <table className={classes.tableMain}>
      <thead>
        <tr className={classes.tableRow}>
          <th>Serial</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Degree</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((data, index) => (
            <tr className={classes.tableRow} key={index}>
              <td>{(serial = serial + 1)}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.degree}</td>
              <td>{data.address}</td>
              <td>
                <button className={classes.icon}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => setUpdateHide(index)}
                  />
                </button>
                <button className={classes.icon}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => setDeleteHide(index)}
                  />
                </button>
              </td>
              {updateHide === index && (
                <Update
                  index={index}
                  setUpdateHide={setUpdateHide}
                  data={data}
                  api={api}
                />
              )}
              {deleteHide === index && (
                <Delete
                  index={index}
                  setDeleteHide={setDeleteHide}
                  data={data}
                  api={api}
                />
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
