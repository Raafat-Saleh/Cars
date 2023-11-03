/** @format */

import React, { useState, useEffect } from "react";
import "./index.scss";

import {
  AiOutlineFieldTime,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { PiEngineFill } from "react-icons/pi";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";

export default function Product({ product, theme }) {
  const [color, setColor] = useState("");
  const [placeholder, setplaceholder] = useState(true);
  const options = {
    type: "slide",
    arrows: true,
    pagination: false,
    speed: 1200,
  };

  useEffect(() => {
    const time = setInterval(() => {
      setplaceholder(false);
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className={`product ${theme}-theme`}>
      <div className="menu-mode">
        <button
          className={placeholder ? "used hide" : "used"}
          onClick={() => setColor(color === "" ? "makeColorState" : "")}
        >
          {!color ? (
            <AiOutlineHeart />
          ) : (
            <AiFillHeart color={`second-${theme}-color`} />
          )}
        </button>

        <div className="product-img">
          {placeholder ? (
            <div className="skeleton_Container">
              <div className="skeleton_image skeleton"></div>
            </div>
          ) : (
            <Splide aria-label="My Favorite Images" options={options}>
              <SplideSlide>
                <img src={product.images[0]} alt="Image1" />
              </SplideSlide>
              <SplideSlide>
                <img src={product.images[1]} alt="Image2" className="img2" />
              </SplideSlide>
              <SplideSlide>
                <img src={product.images[2]} alt="Image3" className="img2" />
              </SplideSlide>
            </Splide>
          )}
        </div>

        <div className="product-details">
          <div className="rating-and-price">
            <div className="product-rating">
              <span className="location">{product.location}</span>
            </div>
            <div className="day_month">
              <h6>
                <span className="tt">
                  <AiOutlineFieldTime size={13} />
                </span>
                <span className="day">{product.time}</span>
                <span className="month"> day age</span>
              </h6>
            </div>
          </div>
          <div className="name-and-description">
            <h6 className="name">{product.title}</h6>
          </div>

          <div className="product-price">
            <h6 className="price">
              <span className="count">L.E</span>
              <span className="currency">{product.price}</span>
            </h6>
          </div>
        </div>

        <div className="product-options">
          <span className="km">
            <MdSpeed size={16} />
            {product.distance} km
          </span>
          <span className="auto">
            <TbManualGearbox size={14} /> {product.auto_dual}
          </span>
          <span className="cc">
            <PiEngineFill size={16} />
            1800 cc
          </span>
        </div>
      </div>
    </div>
  );
}
