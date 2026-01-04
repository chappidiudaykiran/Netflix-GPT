import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((state)=>state.user.user);
  console.log("User from Redux:", user);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black to-transparent w-full z-10  flex justify-between items-center">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
     {user && (<div className="flex items-center gap-4">
        <img
          alt="usericon"
          className="w-8 h-8 rounded cursor-pointer filter brightness-75 saturate-150 hue-rotate-330"
          src={user?.photoURL}
        />
        <button
          onClick={handlesignout}
          className="text-white bg-red-600 px-4 py-2 rounded"
        >
          signout
        </button>
      </div>)}
    </div>
  );
};

export default Header;
