import { useRef, useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import swal from 'sweetalert';

import { OTPApi } from "../../api/otp";

import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";

const Otp = () => {

    const [OTPSuccess, setOTPSuccess] = useState(false);

    const { clientToken } = useContext(TokenContext);
    const { user } = useContext(UserContext);

    const OTPRef = useRef();

    const resendOTP = async () => {
        const body = {
            email: user.email
        }

        try {
            const response = await OTPApi('/email', clientToken, body);
            console.log(response);
            if ( response.code === 200 || response.status === 200 ) {
                return swal('OTP Resent', `Please check your email`, 'success');
            }
            swal('OTP failed to resend', 'Resend is only allowed after 300 seconds.', 'error');

        } catch( error ) {
            console.error(error);
        }
    }

    const handleOTP = async ev => {
        ev.preventDefault();

        const body = {
            email: user.email,
            otp: OTPRef.current.value
        }

        try {
            const response = await OTPApi('/email/verify', clientToken, body)
            if ( response.code === 200 || response.status === 200 ) {
                return swal('Login successful', `Welcome back ${user.first_name}`, 'success')
                    .then(() => setOTPSuccess(true))
            }
            if ( response.code === 401 || response.status === 401 ) {
                return swal(`OTP Didn't Match`, `Please Try Again`, 'error')
            }
            if ( response.code === 404 || response.status === 404 ) {
                return swal(`OTP not found`, `Please Resend`, 'error')
            }
            if ( response.code === 410 || response.status === 410 ) {
                return swal(`Expired Code`, `Please Resend And Try Again`, 'error')
            }
            swal('Wrong OTP', 'Please retry', 'error')
        } catch( error ) {
            console.error(error);
        }
    }

    return (
        <>
        {
            !user
            ? <Navigate to='/' replace={true} />
            : OTPSuccess
            ? <Navigate to='/' replace={true} />
            : (
            <div className="flex flex-col min-h-screen">
<Navbar />

<div className="flex-grow flex flex-col w-full max-w-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 mx-auto">
<div className="self-center mb-6 text-xl font-semibold sm:text-2xl">
    Verify OTP
</div>

<div className="mt-8">
    <form action="#" autoComplete="off" onSubmit={handleOTP}>

        <div className="flex flex-col mb-6">
            <div className="flex relative ">
                <span className="inline-flex  items-center px-3 border-t border-l border-b  border-black text-black shadow-sm text-sm">
                    <LockSvg />
                </span>
                <input 
                    type="number" 
                    id="sign-in-password" 
                    className=" flex-1 appearance-none border border-black w-full py-3 px-4 text-black placeholder-black shadow-sm text-sm focus:outline-none focus:border-black" 
                    placeholder="OTP Code"
                    ref={OTPRef}
                    required
                />
                </div>
            </div>

            <div className="flex w-full">
                <button type="submit" className="py-2 px-4 bg-black text-white w-full text-center text-base font-semibold">
                    Verify
                </button>
            </div>
    </form>
    <div className="flex items-center justify-center mt-6" onClick={resendOTP}>
        <div className="inline-flex items-center text-xs text-center">
            <span className="ml-2">
                Did not recieve code?
            </span>
        </div>
        <span className="inline-flex items-center text-xs text-center"> Resend </span>
    </div>
</div>
</div>

<Footer />
            </div>
            )
        }
        </>
    )
}

export default Otp

const LockSvg = () => {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
            </path>
        </svg>
    )
}