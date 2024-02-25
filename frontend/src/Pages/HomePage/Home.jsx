import React from "react";
import styles from "./Home.module.css";
import illustration from "../../assets/illustration.jpg";
import { FaUserPlus } from "react-icons/fa";
import {  Link } from "react-router-dom";

export default function Home() {

  return (
    <div className={styles.bodyContent}>
      <div className={styles.textContent}>
        <h1>
          Take Control of <br />
          <span>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom.
          <br /> Start your journey today.
        </p>
        <div className={styles.loggingOptions}>
          <Link to="/signup" className={styles.btn}>
            <span>Create Account</span>
            <FaUserPlus className={styles.icon} />
          </Link>
          
          <p>
            Already have an account? <Link to="/login">Login in here</Link>
          </p>
        </div>
      </div>
      <div className={styles.imgContent}>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}
