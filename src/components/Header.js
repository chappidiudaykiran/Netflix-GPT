import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSerachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { Supported_Languages } from "../utils/constants";
const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const user=useSelector((state)=>state.user.user);
  const showgptsearch=useSelector((state)=>state.gpt.showgptsearch);

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  const handlegptsearchclick=()=>{
    dispatch(toggleGptSerachView());
  }

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL: photoURL || USER_AVATAR,
          })
        );
        navigate("/Browse");
      } 
      
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubcribe when the component unmounts
    return () => unsubscribe(); 

  }, [dispatch, navigate]);

  return (
    <div className="absolute px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-b from-slate-950 via-slate-900/80 to-transparent w-full z-10 flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-md object-cover"
          src={LOGO}
          alt="MovieGPT logo"
        />
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">Movie GPT</h1>
      </div>
     {user && (
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        {showgptsearch && <select className="hidden md:block bg-slate-800/80 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500" defaultValue="en" onChange={handleLanguageChange}>
          {Supported_Languages.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>}
        <button className="text-white bg-cyan-600 mx-2 sm:mx-3 lg:mx-4 my-1 sm:my-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm lg:text-base rounded-lg hover:bg-cyan-700 transition-all duration-200 font-semibold" onClick={handlegptsearchclick}>
         {showgptsearch?"Home":"Movie GPT Search"}
        </button>
        <img
          alt="usericon"
          className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 rounded cursor-pointer filter brightness-75 saturate-150 hue-rotate-330"
          src={user?.photoURL || USER_AVATAR}
        />
        <button
          onClick={handlesignout}
          className="text-white bg-cyan-600 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm lg:text-base hover:bg-cyan-700"
        >
          Logout
        </button>
      </div>)}
    </div>
  );
};

export default Header;