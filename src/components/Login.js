import React from 'react'
import Header from './Header'

const Login = () => {

    const[isSignIn,setIsSignIn]=React.useState(true);
    const toogleSignIn=()=>{
        // Logic for toggling sign in
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg" alt="Netflix Bg"/>
        </div>
        <form className='absolute w-3/12 bg-black/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 p-12 rounded-lg text-white'>
            <h1 className='font-bold text-3xl mb-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input 
                type="text" 
                placeholder='Full Name'
                className='py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white'
            />}
            <input 
                type="email" 
                placeholder='Email Address'
                className='py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white'
            />
            
            <input 
                type="password" 
                placeholder='Password'
                className='py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white'
            />
            <button className='bg-red-600 hover:bg-red-700 p-3 rounded font-semibold mt-6'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='text-gray-400 text-sm mt-4' onClick={toogleSignIn} style={{cursor: "pointer"}}>
                 {isSignIn ? "New to Netflix? " : "Already have an account? "}<span className='text-white hover:underline cursor-pointer'>{isSignIn ? "Sign up now" : "Sign in now"}</span>
            </p>
        </form>
    </div>
  )
}

export default Login