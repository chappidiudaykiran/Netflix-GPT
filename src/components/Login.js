import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handlebutton = () => {
    // Logic for handling sign in or sign up
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    // Proceed with sign in or sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/186321916?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL })
            );
              navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          // ..
          setErrorMessage(error.code + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(error.code + "-" + errorMessage);
        });
    }
  };
  const toogleSignIn = () => {
    // Logic for toggling sign in
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
          alt="Netflix Bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 p-12 rounded-lg text-white"
      >
        <h1 className="font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
        />
        <button
          className="bg-red-600 hover:bg-red-700 p-3 rounded font-semibold mt-6"
          onClick={handlebutton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-gray-400 text-sm mt-4"
          onClick={toogleSignIn}
          style={{ cursor: "pointer" }}
        >
          {isSignIn ? "New to Netflix? " : "Already have an account? "}
          <span className="text-white hover:underline cursor-pointer">
            {isSignIn ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
