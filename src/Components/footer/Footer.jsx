import React from "react";

const Footer = () => {
    return (
        <div className="bg-black mt-28">
        <div className="container w-9/12 grid grid-cols-3 py-8 mx-auto gap-60 text-white">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Boxout</h1>
                <p className="flex flex-row"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></span>  184 Main Rd E, St Albans VIC 3021, Australia</p>
                <p className="flex flex-row"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg></span>  boxout@company.com</p>
                <p className="flex flex-row"><span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg></span>  +001 2233 456</p>
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
        <div className="bg-white text-black pl-44 text-sm">Copyright © 2022 Boxout, Inc. All rights reserved.</div>
        </div>
    )
};
export default Footer;