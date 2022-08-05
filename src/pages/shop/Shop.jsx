import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import Card from "../../Components/card/Card";
import cardData from "../../Components/card/cardData"
import Footer from "../../Components/footer/Footer";

const Shop = () => {
    return(
        <>
        <Navbar />
        <div className="bg-[url(https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Store-New-Wall_1920x.jpg?v=1621509881)] h-[80vh] bg-center bg-cover">
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
export default Shop