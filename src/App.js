import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomScreen from "./Pages/Home/HomScreen";

import ProfileScreen from "./Pages/ProfilesScreens/ProfileScreen";
import LoginScreen from "./Pages/Loginscreen/LoginScreen";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  // const user = false;
  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    // login panni vchu iruntha token a save pannum refresh analum log pananthava ellla
    const unscribed = onAuthStateChanged(auth, (userSanjee) => {
      // console.log(userAuth);
      if (userSanjee) {
        dispatch(
          login({
            uid: userSanjee.uid,
            email: userSanjee.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unscribed;
  }, []);

  // const user = { name: "sanjee", email: "sanjee@gmail.com", password: "12345" };
  return (
    <div className="app">
      <Router>
        {!user ? (
          // Loginscreen
          // <Routes>
          //   <Route path="/" element={<Loginscreen />}></Route>
          // </Routes>
          // <h1>sanjeevan</h1>
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
