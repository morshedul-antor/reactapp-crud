import React, { useState } from "react";
import classes from "./Create.module.css";
import { faLeaf, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { refreshPage } from "../../../utils/refreshPage";

export default function Create({ setFormOpen, setListOpen }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState();
  const [address, setAddress] = useState("");

  const api = process.env.REACT_APP_API_URL;

  const openCloseListForm = () => {
    setListOpen(true);
    setFormOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      name,
      phone,
      email,
      degree,
      address,
    };
    let postFetch = await fetch(`${api}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (postFetch.ok) {
      refreshPage();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <button className={classes.button} onClick={() => openCloseListForm()}>
          Item List
        </button>
      </div>
      <div className={classes.formWrapper}>
        <FontAwesomeIcon className={classes.icon} icon={faThumbtack} />
        <div className={classes.logo}>ADD ITEM</div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={classes.section}>
            <FontAwesomeIcon className={classes.leaf} icon={faLeaf} />
            Details Info
          </div>
          <div className={classes.innerWrap}>
            <div className={classes.formGrid}>
              <label>
                Full Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength={3}
                  required
                />
              </label>
              <label>
                Degree
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className={classes.formGrid}>
              <label>
                Phone
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  minLength={11}
                  maxLength={11}
                  pattern="[0][1][0-9]{9}"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <label>
              Address
              <textarea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>
          <button className={classes.button} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
