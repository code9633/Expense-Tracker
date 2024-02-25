import React, { useState } from "react";
import styles from "./LoginSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SocialAuth from "../../components/SocialAuth/SocialAuth";
import { handleToastifyMessage } from "../../../Utils/Utils";

const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handelLogin = async (e) => {
    e.preventDefault();
    setErrors(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      setSuccessMessage(response.data.success);
      navigate("/dashboard");

    } catch (error) {
      if (error.response.data.error) {
        handleToastifyMessage("warn", error.response.data.error)
        setErrors(error.response.data.error);

      } else {
        handleToastifyMessage("error", `An unexpected error occured, ${error}`)
        setErrors("An unexpected error occured");
      }
    }
  };

  return (
    <>
      <div className={styles.bodyContent}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Log In to Account</h2>
              <p>
                Welcome to our expense tracking system!
                <br /> Log in to effortlessly manage and monitor your financial
                transactions.
              </p>
            </div>
            <div className={styles.formContainer}>
              <form onSubmit={handelLogin}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className={`${styles.inputField} ${
                    errors ? styles.error : ""
                  }`}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  required
                  className={`${styles.inputField} ${
                    errors ? styles.error : ""
                  }`}
                />

                <button type="submit">Log In</button>
              </form>
            </div>
            <div className={styles.other}>
              <hr />
              <p>Or sign up with</p>
            </div>

            {/* component/SocialAuth  -> Authentiation from using social media */}
            <SocialAuth/>

            <div className={styles.footerText}>
              <p>By signing up I accept Compyant</p>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className={styles.outsideText}>
          <p>
            Have an account? <Link to="/signup">Register in here</Link>
          </p>
        </div>
      </div>
   
    </>
  );
};

export default Login;
