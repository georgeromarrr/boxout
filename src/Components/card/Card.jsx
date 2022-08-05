/* eslint-disable */

import React, { useState } from 'react'
import Rating from "@mui/material/Rating";


const Card = (props) => {
  return (
    <div>   
      <div className="max-w-sm" key="{props.id}">
          {/* image */}
          <a href="/">
              <img className="p-2" src={props.imageName} alt="product image" />
          </a>

          {/* card body */}
          <div className="px-5 pb-5">
              <div className="flex flex-row justify-between">

                  {/* title */}
                  <a href="/">
                      <h5 className="text-base tracking-tight">{props.title}</h5>
                  </a>
                  
                  {/* heart */}
                  <HeartSvg />
              </div>
              <div className="flex flex-row justify-between mt-2.5 mb-5">

                  {/* price */}
                  <div>
                      <p className="text-sm">₱ {props.price.toLocaleString()}</p>
                  </div>

                  {/* rating */}
                  <div className="flex items-center">
                    <Rating
                      name="half-rating-read"
                      defaultValue={props.ratings}
                      precision={0.5}
                      readOnly 
                      sx={{
                      fontSize: 16,
                      color: "#121111",
                      pr: 0.4
                    }}  
                    />

                    {/* rating number */}
                    <span className="text-sm">({props.reviewNum})</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card

const HeartSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}