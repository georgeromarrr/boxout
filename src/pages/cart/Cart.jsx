import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../Components/navbar/Navbar"
import Footer from "../../Components//footer/Footer"
const Cart = () => {
    return(
        <>
        <Navbar />
        <div className="w-8/12 mx-auto flex flex-row gap-4">
            <div className="basis-2/3">
                <h1 className="font-semibold tracking-widest mt-8 mb-3">My Bag</h1>
                <div className="flex flex-row border-t-2 p-4 gap-4">
                    <div className="basis-1/4">
                        <img src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Prio-Navy-_1_850x.progressive.jpg?v=1641559251" alt="" />
                    </div>
                    <div className="basis-1/2">
                        <h1>Vetulonia Black</h1>
                        <p className="text-xs">Size: <span className="text-sm">UK 6</span></p>
                        <p className="text-xs">Color: <span className="text-sm">Black Leather</span></p>
                        <div className="flex border border-black px-2 w-24 my-5 justify-between text-lg">
                            <span className="qt-minus">-</span>
                            <span className="qt">1</span>
                            <span className="qt-plus">+</span>
                        </div>
                    </div>
                    <div className="basis-1/4 text-end">
                        <p>₱ 14,000.00</p>
                        <button className="my-14 text-xs bg-black text-white px-4 py-2">Remove</button>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 text-center">
                <h1 className="font-semibold tracking-widest mt-8 mb-4">Order Summary</h1>
                <div className="flex flex-col gap-4 bg-[#EDEDED] p-4 mb-4">
                    <div className="flex flex-row justify-between text-xs">
                        <p>Subtotal</p><span className="text-red-500">₱ 14,000.00</span>
                    </div>
                    <div className="flex flex-row justify-between text-xs">
                        <p>Shipping</p><span>Calculated at next step</span>
                    </div>
                    <button className="w-full bg-black text-white py-2">Checkout</button>
                </div>
                <Link className="text-xs underline underline-offset-4" to="/wishlist">View my Wishlist</Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cart