import React from "react";
import Navbar from "../../Components/navbar/Navbar"
import Footer from "../../Components//footer/Footer"
const Cart = () => {
    return(
        <>
        <Navbar />
        <div class="w-8/12 mx-auto flex flex-row gap-4">
            <div class="basis-2/3">
                <h1 className="font-semibold tracking-widest mt-8 mb-3">My Bag</h1>
                <div className="flex flex-row border-t-2 p-4 gap-4">
                    <div class="basis-1/4">
                        <img src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Prio-Navy-_1_850x.progressive.jpg?v=1641559251" alt="" />
                    </div>
                    <div class="basis-1/2">
                        <h1>Vetulonia Black</h1>
                        <p className="text-xs">Size: <span className="text-sm">UK 6</span></p>
                        <p className="text-xs">Color: <span className="text-sm">Black Leather</span></p>
                        
                    </div>
                    <div class="basis-1/4">03</div>
                </div>
            </div>
            <div class="basis-1/3">
                <h1 className="font-semibold tracking-widest mt-8">Order Summary</h1>
                </div>
        </div>
        <Footer />
        </>
    )
}

export default Cart