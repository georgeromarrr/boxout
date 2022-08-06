import { useRef, useContext } from "react";
import { Link, Navigate } from 'react-router-dom';
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import swal from 'sweetalert';

import { UserApi } from "../../api/user";
import { OTPApi } from "../../api/otp";

import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";

const Login = () => {

    const { clientToken, replaceClientToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async ev => {
        ev.preventDefault();
        
        const body = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        try {
            const response = await UserApi('POST', '/login', clientToken, body);
            if ( response.code === 200 || response.status === 200 ) {
                const OTPResponse = await OTPApi('/email', clientToken, { email: usernameRef.current.value })
                if (OTPResponse.code === 400 || OTPResponse.status === 400) {
                    return swal('Login failed', 'Cannot send OTP. Resend is only allowed after 300 seconds. Please try again later', 'error');
                }
                return setUser({ ...response.user_profile, accessToken: response.access_token, refreshToken: response.refresh_token });
            }
            swal("Login failed",response.message, "error")
                .then( () => passwordRef.current.value = '' )
        } catch (err) {
            if ( err.code === 403 || err.status === 403 ) {
                replaceClientToken();
                return swal("Login failed","Please try again later.","error")
                    .then( () => passwordRef.current.value = '')
            }
            swal("Login failed",err.message, "error")
                .then( () => passwordRef.current.value = '' )
        }
    }

    return (
        <>
        {
            user ? <Navigate to='/otp' replace={true} /> : (
            <div className="flex flex-col min-h-screen">
<Navbar />

<div className="flex-grow flex flex-col w-full max-w-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto">
<div className="self-center mb-6 text-xl font-semibold sm:text-2xl">
    Login
</div>
<div className="mt-8">
    <form action="#" autoComplete="off" onSubmit={handleLogin}>
        <div className="flex flex-col mb-2">
            <div className="flex relative ">
                <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                    <EmailSvg />
                </span>
                <input 
                    type="email" 
                    id="sign-in-email" 
                    className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black"
                    placeholder="Email"
                    ref={usernameRef}
                    required
                />
            </div>
        </div>
        <div className="flex flex-col mb-6">
            <div className="flex relative ">
                <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                    <LockSvg />
                </span>
                <input 
                    type="password" 
                    id="sign-in-password" 
                    className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />
                </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                    <a href="/" className="inline-flex text-xs sm:text-sm">
                        Forgot Your Password?
                    </a>
                </div>
            </div>
            <div className="flex w-full">
                <button type="submit" className="py-2 px-4 bg-black text-white w-full text-center text-base font-semibold">
                    Login
                </button>
            </div>
    </form>
</div>
<div className="flex items-center justify-center mt-6">
    <Link to="/register" className="inline-flex items-center text-xs text-center">
        <span className="ml-2">
            You don&#x27;t have an account?
        </span>
    </Link>
</div>
</div>

<Footer />
            </div>
            )
        }
        </>
    )
}

export default Login

const EmailSvg = () => {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
            </path>
        </svg>
    )
}

const LockSvg = () => {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
            </path>
        </svg>
    )
}