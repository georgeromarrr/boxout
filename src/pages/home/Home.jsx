import React from "react";
import Navbar from "../../Components/navbar/Navbar"
import Footer from "../../Components/footer/Footer"
import HomeCard from "./HomeCard";
import Homedata from "./Homedata";
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="relative bg-[url(https://cdn.shopify.com/s/files/1/0521/9693/3824/files/08.01-Header_2048x.progressive.jpg?v=1659338959)] h-[90vh] bg-cover">
                <div className="absolute bottom-56 left-48">
                    <h1 className="heroSubtxt text-white text-5xl">Men's Sandals & Espadrilles</h1>
                    <h2 className="text-white text-4xl font-semibold py-4">Summer Shoes</h2>
                    <button className="bg-white text-sm font-semibold px-14 py-4 text-center hover:bg-transparent hover:text-white hover:outline hover:outline-1 hover:outline-white">Shop Now</button>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <h1 className="text-center py-12 font-semibold tracking-[0.50rem]">PRODUCTS</h1>
                <div className="grid grid-cols-4">
                { Homedata.map((item) =>
                    <HomeCard 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imageName={item.imageName}
                    ratings={item.ratings}
                    reviewNum={item.reviewNum}
                    item={item}
                    />
                )}
                </div>

            </div>

            <div className="w-9/12 mx-auto mt-52">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                        <h1 className="font-bold text-xl">Free Shipping</h1>
                        <p className="text-sm leading-loose">For the UK, US, EU, Canada & Australia(minimum spend).</p>
                    </div>
                    <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        <h1 className="font-bold text-xl">Summer Sale</h1>
                        <p className="text-sm leading-loose">Now up to 50% off</p>
                    </div>
                    <div className="flex flex-col place-items-center text-center w-48 gap-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                    </svg>
                        <h1 className="font-bold text-xl">Free Returns</h1>
                        <p className="text-sm leading-loose">For the UK, US, EU, Canada & Australia, Rest of the World &#8369; 1, 100.00</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home