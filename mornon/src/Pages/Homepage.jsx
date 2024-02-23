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
                        'Many stories from antiquity involve flight, such as the Greek legend of Icarus and Daedalus, and the Vimana in ancient Indian epics. Around 400 BC in Greece, Archytas was reputed to have designed and built the first artificial, self-propelled flying device, a bird-shaped model propelled by a jet of what was probably steam, said to have flown some 200 m (660 ft).[12][13] This machine may have been suspended for its flight. \n\nSome of the earliest recorded attempts with gliders were those by the 9th-century Andalusian and Arabic-language poet Abbas ibn Firnas and the 11th-century English monk Eilmer of Malmesbury; both experiments injured their pilots.[16] Leonardo da Vinci researched the wing design of birds and designed a man-powered aircraft in his Codex on the Flight of Birds (1502), noting for the first time the distinction between the center of mass and the center of pressure of flying birds. \n\n In 1799, George Cayley set forth the concept of the modern airplane as a fixed-wing flying machine with separate systems for lift, propulsion, and control.[17][18] Cayley was building and flying models of fixed-wing aircraft as early as 1803, and he built a successful passenger-carrying glider in 1853.[5] In 1856, Frenchman Jean-Marie Le Bris made the first powered flight, by having his glider "L Albatros artificiel" pulled by a horse on a beach.[19] Then the Russian Alexander F. Mozhaisky also made some innovative designs. In 1883, the American John J. Montgomery made a controlled flight in a glider.[20] Other aviators who made similar flights at that time were Otto Lilienthal, Percy Pilcher, and Octave Chanute.\n\nSir Hiram Maxim built a craft that weighed 3.5 tons, with a 110-foot (34 m) wingspan that was powered by two 360-horsepower (270 kW) steam engines driving two propellers. In 1894, his machine was tested with overhead rails to prevent it from rising. The test showed that it had enough lift to take off. The craft was uncontrollable and it is presumed that Maxim realized this because he subsequently abandoned work on it.[21]\n\nIn the 1890s, Lawrence Hargrave conducted research on wing structures and developed a box kite that lifted the weight of a man. His box kite designs were widely adopted. Although he also developed a type of rotary aircraft engine, he did not create and fly a powered fixed-wing aircraft.[22]\n\nBetween 1867 and 1896, the German pioneer of human aviation Otto Lilienthal developed heavier-than-air flight. He was the first person to make well-documented, repeated, successful gliding flights. Lilienthals work led to him developing the concept of the modern wing,[23][24] his flight attempts in 1891 are seen as the beginning of human flight,[25] the "Lilienthal Normalsegelapparat" is considered to be the first airplane in series production and his work heavily inspired the Wright brothers.[26]',
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
