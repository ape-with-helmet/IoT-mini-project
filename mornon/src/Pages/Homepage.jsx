import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Homepage.css";

// import Signup from "./Signup";

const Homepage = () => {
  const [emaail, setEmaail] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleCreateAccountClick = () => {
    setShowSignup(true);
  };
  const handleLoginClick = () => {
    setShowSignup(false);
  };
  return (
    <>
      <img
        src="https://freepngimg.com/save/10328-biohazard-symbol-png-pic/2406x2400"
        alt="Toxic Rotation"
        className="bg-image"
      ></img>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="container-fluid about_1">
              <div className="about-us row">
                <h1>Water Watch</h1>
              </div>
              <div className="about_holder">
                <p className="about_text">
                  <Typewriter
                    options={{
                      strings: [
                        'Our humble team, led by Sadhguna Aithal, Prajwal Krishna Bhat, Shwetha K S, and Smitha Kunder, is honored to introduce our latest project aimed at automating water pumps through a closed-loop system. With deep gratitude for the opportunity to contribute positively to our community, we humbly present our collaborative effort in the field of water management technology. \n Guided by a shared commitment to innovation and sustainability, our team members bring together their respective skills and experiences to address critical challenges in water resource management. Through diligent research and unwavering dedication, we have developed a solution that not only optimizes water usage but also minimizes waste and promotes environmental conservation.\nIn our humble endeavor, we recognize the importance of humility and respect for the resources we seek to protect. With this project, we hope to humbly contribute to the greater good, fostering a future where water is managed responsibly and equitably for the benefit of all.',
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: " 𝗜",
                      delay: 100,
                      pauseFor: 20000,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="roll-animation">
              <div className={showSignup ? 'login-container-show' : 'login-container-hide'}>
                <div className="login-box">
                  <h6>Sign in to WaterWatch</h6>
                  <h2>Login</h2>
                  <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="login-email">Email Address</label>
                    <input
                      className="input_signup"
                      type="email"
                      id="login-email"
                      name="email"
                      value={emaail}
                      onChange={(e) => setEmaail(e.target.value)}
                      required />
                    <label htmlFor="login-password">Password</label>
                    <input
                      className="input_signup"
                      type="password"
                      id="login-password"
                      name="password"
                      value={passwordd}
                      onChange={(e) => setPasswordd(e.target.value)}
                      required />
                    <button type="submit" className="home_button">
                      Sign in
                    </button>
                    <div className="forgot-password">
                      <span className="forgot-password-text" onClick={()=>alert("We cant help you :)")}>Forgot Password?</span>
                      <h6>
                        New to WaterWatch?{" "}
                        <span className='switch-button' onClick={handleCreateAccountClick}>
                          Create account
                        </span>
                      </h6>
                    </div>
                  </form>
                </div>
              </div>
              <div className={showSignup ? 'register-container-hide' : 'register-container-show'}>
                <div className="register-box">
                  <h2>Register</h2>
                  <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="register-email">Email</label>
                    <input
                      className="input_signup"
                      type="email"
                      id="register-email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                    <label htmlFor="register-username">Username</label>
                    <input
                      className="input_signup"
                      type="text"
                      id="register-username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required />
                    <label htmlFor="register-password">Password</label>
                    <input
                      className="input_signup"
                      type="password"
                      id="register-password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required />
                    <button type="submit" className="home_button">
                      Register
                    </button>
                    <h6>
                      New to WaterWatch?{" "}
                      <span className='switch-button' onClick={handleLoginClick}>
                        Login
                      </span>
                    </h6>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
