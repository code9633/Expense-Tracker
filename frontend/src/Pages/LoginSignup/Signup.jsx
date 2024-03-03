import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginSignup.module.css";
import { Link } from "react-router-dom";
import axios from "axios"; // use for the http request
import SocialAuth from "../../components/SocialAuth/SocialAuth";

const Signup = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });

      console.log(response.data)
      setSuccessMessage(response.data.success);
      setTimeout(() => {
        setSuccessMessage(null);
        navigate("/login");
      }, 3000);

    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className={styles.bodyContent}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Create Your Account</h2>
            <p>
              Welcome to our expense tracking system!
              <br /> Sign up to effortlessly manage and monitor your financial
              transactions.
            </p>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleRegistration}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                required
                className={styles.inputField}
              />

              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                required
                className= {styles.inputField}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                required
                className={styles.inputField}
              />

              <button type="submit">Create an account</button>
            </form>

              {error && <p className={styles.error}>{error}</p>}
              {successMessage && <p className={styles.success}>{successMessage}</p>}

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
          Already have an account? <Link to="/login">Login in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
