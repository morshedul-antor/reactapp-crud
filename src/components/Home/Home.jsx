import React, { useEffect, useState } from "react";
import Footer from "../Landing/footer/Footer";
import Navbar from "../Landing/Navbar/Navbar";
import Create from "./Create/Create";
import Show from "./Show/Show";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [listOpen, setListOpen] = useState(true);
  const [formOpen, setFormOpen] = useState(false);

  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/users`, {
          method: "GET",
        });
        const data = await response.json();
        console.log("data", data);
        setUsers(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [api]);

  return (
    <div>
      <Navbar />

      {formOpen && (
        <Create setListOpen={setListOpen} setFormOpen={setFormOpen} />
      )}
      {listOpen && (
        <Show
          users={users}
          setListOpen={setListOpen}
          setFormOpen={setFormOpen}
          api={api}
        />
      )}
      <Footer />
    </div>
  );
}
