import React, { useState } from "react";
import classes from "./Update.module.css";
import { refreshPage } from "../../../../../utils/refreshPage";

export default function Update({ setUpdateHide, index, data, api }) {
  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [degree, setDegree] = useState(data.degree);
  const [address, setAddress] = useState(data.address);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      name,
      phone,
      email,
      degree,
      address,
    };
    let putFetch = await fetch(`${api}/users/${data.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (putFetch.ok) {
      refreshPage();
    }
  };

  return (
    <div key={() => index} className={classes.containerPopup}>
      <div className={classes.formWrapper}>
        <div className={classes.close} onClick={() => setUpdateHide(false)}>
          &times;
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={classes.section}>Update Info</div>
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
                  min={1}
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
