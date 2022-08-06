import React from "react";

const Footer = () => {
    return (
        <>
            <div className="w-9/12 mx-auto mt-52">
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                            <TruckSvg />
                            <h1 className="font-bold text-xl">Free Shipping</h1>
                            <p className="text-sm leading-loose">For all over the Philippines (minimum spend).</p>
                        </div>
                        <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                            <GiftSvg />
                            <h1 className="font-bold text-xl">Summer Sale</h1>
                            <p className="text-sm leading-loose">Now up to 50% off</p>
                        </div>
                        <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                            <ReturnsSvg />
                            <h1 className="font-bold text-xl">Free Returns</h1>
                            <p className="text-sm leading-loose">For all over the Philippines &#8369; 1, 500.00</p>
                        </div>
                    </div>
                </div>
            <div className="bg-black mt-28">
            <div className="container w-9/12 grid grid-cols-3 py-8 mx-auto gap-60 text-white">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Boxout</h1>
                    <p className="flex flex-row">
                        <span className="mr-3"><PinSvg /></span>  18F Main Rd E, Albama Bldg. Makati City, Philippines
                    </p>
                    <p className="flex flex-row">
                        <span className="mr-3"><MailSvg /></span>  boxout@company.com
                    </p>
                    <p className="flex flex-row">
                        <span className="mr-3"><PhoneSvg /></span>  +001 2233 456
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Information</h1>
                    <ul className="flex flex-col gap-4">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping & Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Quick Links</h1>
                    <ul className="flex flex-col gap-4">
                        <li>Store Location</li>
                        <li>My Account</li>
                        <li>Accessories</li>
                        <li>Orders Tracking</li>
                        <li>Size Guide</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white text-black px-60 py-3 text-sm">Copyright © 2022 Boxout, Inc. All rights reserved.</div>
            </div>
        </>
    )
};
export default Footer;

const TruckSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
    )
}

const GiftSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
    )
}

const ReturnsSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
    )
}

const PinSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}

const MailSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

const PhoneSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    )
}