import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { handleToastifyMessage } from "../../../Utils/Utils";

export default function Dashboard() {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Retrieve the User name from the local storage
    setUser(localStorage.getItem("user"));
    const message = localStorage.getItem("message");
    if (message) {
      handleToastifyMessage("success", message);
      localStorage.removeItem("message"); // Remove the message from local storage after displaying it
    }
  }, []); 

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.welcomeNote}>
          Welcome back, <span>{user}</span>
        </h1>
      </div>
    </div>
  );
}
