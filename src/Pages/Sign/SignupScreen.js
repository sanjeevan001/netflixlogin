import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignupScreen.css";
import { auth } from "../../firebase";

function SignupScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   siginin firebase

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //   login

  // const signIn = (e) => {
  //   e.preventDefault();
  //   //login code
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signin}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
