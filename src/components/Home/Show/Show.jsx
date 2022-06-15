import React, { useEffect, useState } from "react";
import Grid from "./Grid/Grid";
import classes from "./Show.module.css";
import Table from "./Table/Table";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show({ setListOpen, setFormOpen, users, api }) {
  const [view, setView] = useState("1");
  const [gridOpen, setGridOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState(true);
  const [search, setSearch] = useState("");

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
        <form action="">
          <input
            className={classes.searchField}
            type="text"
            value={search}
            placeholder="Search User"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={classes.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <button className={classes.button} onClick={() => openClose()}>
          + Add Item
        </button>
      </div>
      {tableOpen && <Table users={users} api={api} search={search} />}
      {gridOpen && <Grid users={users} search={search} />}
    </div>
  );
}
