import React from "react";
import styles from "./SocialAuth.module.css";

function SocialAuth() {
  return (
    <div>
      <div className={styles.socialMedia}>
        <button className={styles.media}>
          <img src="./facebook.png" alt="" />
          <p style={{ color: "blue" }}>facebook</p>
        </button>
        <button className={styles.media}>
          <img src="./google.png" alt="" />
          <p style={{ color: "red" }}>Google</p>
        </button>
        <button className={styles.media}>
          <img src="./linkedin.png" alt="" />
          <p style={{ color: "#0d98ba" }}>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}

export default SocialAuth;
