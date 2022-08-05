import React from "react";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import Card from "../../Components/card/Card";
import cardData from "../../Components/card/cardData";

const Wishlist = () => {
    return(
        <>
        <Navbar />
        <div className="w-11/12 mx-auto">
            <h1 className="text-center py-12 font-semibold tracking-[0.50rem]">Wishlist</h1>
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
export default Wishlist