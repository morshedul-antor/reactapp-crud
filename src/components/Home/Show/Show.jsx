import React, { useEffect, useState } from "react";
import Grid from "./Grid/Grid";
import classes from "./Show.module.css";
import Table from "./Table/Table";

export default function Show({ setListOpen, setFormOpen, users, api }) {
  const [view, setView] = useState("1");
  const [gridOpen, setGridOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState(true);

  useEffect(() => {
    if (view === "2") {
      setGridOpen(true);
      setTableOpen(false);
    } else {
      setGridOpen(false);
      setTableOpen(true);
    }
  }, [view]);

  const openClose = () => {
    setListOpen(false);
    setFormOpen(true);
  };

  return (
    <div className={classes.tableContainer}>
      <div className={classes.wrapper}>
        <button className={classes.button}>
          <select onChange={(e) => setView(e.target.value)}>
            <option value="1">List View</option>
            <option value="2">Grid View</option>
          </select>
        </button>
        <button className={classes.button} onClick={() => openClose()}>
          + Add Item
        </button>
      </div>
      {tableOpen && <Table users={users} api={api} />}
      {gridOpen && <Grid users={users} />}
    </div>
  );
}
