import { useContext, useRef, useState } from "react";
import swal from 'sweetalert';

import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";

import { UserApi } from "../../api/user";

import { TokenContext } from "../../context/TokenContext";

const Register = () => {

    const { clientToken, replaceClientToken } = useContext(TokenContext);

    const firstnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cPasswordRef = useRef();

    const [error, setError] = useState('');

    const handleRegister = async ev => {
        ev.preventDefault();

        if (passwordRef.current.value !== cPasswordRef.current.value) {
            setError('Passwords must match.');
        }
        setError('');

        const body = {
            first_name: firstnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        const response = await UserApi('POST', '/register',  clientToken, body);
        console.log(response);
        if ( response.code === 200 || response.status === 200 ) {
            return swal(response.message,`Thanks for joining!`,"success")
                .then( () => window.location = '/login');
        } else if ( response.code === 403 || response.status === 403 ) {
            replaceClientToken();
            return handleRegister(ev);
        }
        swal("Registration failed", response.message, "error");
    }

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        
        
<div className="flex-grow flex flex-col w-full max-w-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto">
    <div className="self-center mb-6 text-xl font-semibold sm:text-2xl">
        Create An Account
    </div>
    <p className="text-center text-xs">Please register below to create a new account on our website.</p>
    <div className="mt-8">
        <form action="#" autoComplete="off" onSubmit={handleRegister}>
            { error 
            ? (
                <p className="text-center text-red-600">{error}</p>
            ) : ''
            }
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                        <NameSvg />
                    </span>
                    <input 
                        type="text" 
                        id="sign-in-first-name" 
                        className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                        placeholder="Enter First Name"
                        ref={firstnameRef}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                        <MailSvg />
                    </span>
                    <input 
                        type="email" 
                        id="sign-in-email" 
                        className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                        placeholder="Enter Email"
                        ref={emailRef}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="flex relative ">
                    <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                        <LockSvg />
                    </span>
                    <input 
                        type="password" 
                        id="sign-in-password" 
                        className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                        placeholder="Enter Password"
                        ref={passwordRef}
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
                        id="sign-in-confirm" 
                        className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                        placeholder="Confirm Password"
                        ref={cPasswordRef}
                        required
                    />
                </div>
            </div>
            <div className="items-center mb-6 -mt-2">
                <input id="link-checkbox" type="checkbox" value="" className="w-3 h-3 border-black" />
                <label htmlFor="link-checkbox" className="ml-2 text-xs">Sign up to our newsletter & receive the latest news, offer & discounts</label>
            </div>
            <div className="flex w-full">
                <button type="submit" className="py-2 px-4 bg-black text-white w-full text-center text-base font-semibold">
                    Register
                </button>
            </div>
        </form>
    </div>
    <div className="flex items-center justify-center mt-6">
        <a href="/login" className="inline-flex items-center text-xs text-center">
            <span className="ml-2">
                Already have an account?
            </span>
        </a>
    </div>
</div>

        <Footer />
        </div>
    )
}

export default Register

const MailSvg = () => {
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

const NameSvg = () => {
    return (
        <svg width="15" height="15" viewBox="0 0 12 12" enable-background="new 0 0 12 12" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                <path d="M9.3005371,6.5351563C8.4776001,7.4294434,7.3084106,8,6,8S3.5223999,7.4294434,2.6994629,6.5351563   C1.3145142,7.2350464,0.5,8.6131592,0.5,10.5V12h11v-1.5C11.5,8.6131592,10.6854858,7.2350464,9.3005371,6.5351563z" fill="#1D1D1B"/>
                <circle cx="6" cy="3.5" fill="#1D1D1B" r="3.5"/>
            </g>
        </svg>
    )
}