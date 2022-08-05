import React from "react";
import Navbar from "../../Components/navbar/Navbar"
import Footer from "../../Components/footer/Footer"
import Card from "../../Components/card/Card";
import cardData from "../../Components/card/cardData";
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
                { cardData.map((item) =>
                    <Card 
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

            <Footer />
        </>
    )
}

export default Home