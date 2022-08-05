import React from "react";
import Card from "../../Components/card/Card";
import cardData from "../../Components/card/cardData"
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";

const Item = () => {
    return (
        <>
            <Navbar />
            <div className="w-11/12 mx-auto flex flex-row gap-4">
                <div className="basis-3/4">
                    <div className="flex flex-col">
                        <img src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_1_850x.progressive.jpg?v=1640255582" alt="" />
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <img className="w-26 h-16" src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_2_850x.progressive.jpg?v=1640255579" alt="" />
                        <img className="w-26 h-16" src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_1_850x.progressive.jpg?v=1640255582" alt="" />
                        <img className="w-26 h-16" src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_3_850x.progressive.jpg?v=1640255585" alt="" />
                        <img className="w-26 h-16" src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_4_850x.progressive.jpg?v=1640255588" alt="" />
                        <img className="w-26 h-16" src="https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_5_850x.progressive.jpg?v=1640255589" alt="" />
                    </div>
                </div>

                <div className="basis-1/3">
                    <div className="flex flex-row justify-between">
                        <h1 className="tracking-widest text-lg">Beadnell Navy</h1>
                        <p>₱‌14,100.00</p>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        <p className="text-sm text-gray-500">Waxed Leather Slip-on Trainers</p>
                        <p className="text-xs font-light leading-loose">Our new casual penny loafer on a trainer cupsole. The classic upper styling in navy calf leather is sourced from Steads Tannery, Leeds. It features a simple saddle, hand stitched apron seam and a folded topline.</p>
                    </div>
                    <div className="my-6">
                        <h1>Colour</h1>
                        <span class="w-max block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                            <a href="#blue" class="block w-6 h-6 bg-[#303642] rounded-full">
                            </a>
                        </span>
                    </div>
                    <div>
                        <h1>UK Size</h1>
                        <div className="grid grid-cols-6 gap-2 text-center">
                            <div className="text-sm font-medium py-2 border">7</div>
                            <div className="text-sm font-medium py-2 border">7.5</div>
                            <div className="text-sm font-medium py-2 border">8</div>
                            <div className="text-sm font-medium py-2 border">8.5</div>
                            <div className="text-sm font-medium py-2 border">9</div>
                            <div className="text-sm font-medium py-2 border">9.5</div>
                            <div className="text-sm font-medium py-2 border">10</div>
                            <div className="text-sm font-medium py-2 border">10.5</div>
                            <div className="text-sm font-medium py-2 border">11</div>
                            <div className="text-sm font-medium py-2 border">11.5</div>
                        </div>
                        <div className="flex flex-row gap-4 mt-8">
                            <button className="w-80 py-3 bg-black text-white">Add to bag</button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 border p-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 my-24 py-5 bg-[#f4f4f5] px-32 font-light text-sm text-gray-700">
                <div className="flex flex-row items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path d="M9 17a 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <h1>Free UK,US,EU,AU & CA Shipping</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    <h1>Free returns (UK,US,EU,AU,CA)</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <h1>Buy with interest-free payments</h1>
                </div>
            </div>
            <div className="mt-32">
                <div className="w-10/12 mx-auto items-center text-center">
                    <div className="flex flex-row place-content-center">
                        <h1 className="text-5xl">4.47</h1>
                        <div className="flex flex-col ml-3 gap-2">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h2 className="text-sm">106 REVIEWS</h2>
                        </div>
                    </div>
                    <h1 className="tracking-[0.5rem] mt-8 font-semibold">REVIEW</h1>
                    <div className="grid grid-cols-2 gap-12">
                        <div class="w-full sm:inline-block border-t border-b py-8">
                            <div class="flex items-start text-left">
                                <div class="flex-shrink-0">
                                    <div class="inline-block relative">
                                        <a href="#" class="block relative">
                                            <div class="mx-auto bg-gray-200 h-16 w-16 "></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="ml-6">
                                    <p class="flex items-baseline">
                                        <span class="font-bold">
                                            Hanna B
                                        </span>
                                    </p>
                                    <div class="flex items-center mt-1">
                                        <p className="text-xs">July 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div class="mt-3 w-full text-start">
                                <p class="mt-1">
                                    As always very pleased with the shoes
                                </p>
                            </div>
                        </div>
                        <div class="w-full sm:inline-block border-t border-b py-8">
                            <div class="flex items-start text-left">
                                <div class="flex-shrink-0">
                                    <div class="inline-block relative">
                                        <a href="#" class="block relative">
                                            <div class="mx-auto bg-gray-200 h-16 w-16 "></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="ml-6">
                                    <p class="flex items-baseline">
                                        <span class="font-bold">
                                            Mak69s
                                        </span>
                                    </p>
                                    <div class="flex items-center mt-1">
                                        <p className="text-xs">June 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="fill" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div class="mt-3 w-full text-start">
                                <p class="mt-1">
                                    Good quality shoes made to last.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="grid place-items-end mr-6 mt-4">
                    <button className="border border-black p-2 tracking-widest text-sm">Show All (106)</button>
                </div>
                <h1 className="uppercase tracking-[0.5rem] font-medium text-start mt-8">Related Products</h1>
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
            </div>
            <Footer />
        </>
    )
}
export default Item