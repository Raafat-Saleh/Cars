/** @format */

import React, { useEffect, useState } from "react";
import RangeSlider from "../rangeSlider/RangeSlider";
import "./index.scss";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdClose,
} from "react-icons/md";

export default function ProductsFilter({
  products,
  setFilterdProducts,
  activeProductFilter,
  theme,
  showProductFilter,
}) {
  const [loc, setLoc] = useState(new Set());
  const [locArr, setLocArr] = useState([]);
  const [activefilterOne, setActivefilterOne] = useState("dis-activefilter");

  useEffect(() => {
    products.map((pro) => setLoc(loc.add(pro.location)));
    setLocArr([...loc]);
  }, [products]);

  function handleRangeDistance(e) {
    switch (e.target.value) {
      case "all":
        setFilterdProducts(products);
        break;
      case "<= 10000 k.m":
        setFilterdProducts(
          products.filter((product) => product.distance <= 10000)
        );
        break;
      case "<= 20000 k.m":
        setFilterdProducts(
          products.filter((product) => product.distance <= 20000)
        );
        break;
      case "<= 100000 k.m":
        setFilterdProducts(
          products.filter((product) => product.distance <= 100000)
        );
        break;
      default:
        break;
    }
  }

  function handleRangeTime(e) {
    switch (e.target.value) {
      case "all":
        setFilterdProducts(products);
        break;
      case "<10":
        setFilterdProducts(products.filter((product) => product.time < 10));
        break;
      case "<20":
        setFilterdProducts(products.filter((product) => product.time < 20));
        break;
      case "<30":
        setFilterdProducts(products.filter((product) => product.time < 30));
        break;
      default:
        break;
    }
  }

  function handleLocation(e) {
    if (e.target.value == "all") {
      setFilterdProducts(products);
    } else {
      setFilterdProducts(
        products.filter((product) => product.location === e.target.value)
      );
    }
  }

  return (
    <div className={`products-filter ${theme}-theme ${activeProductFilter} `}>
      <h6 className="filter-title">Filters</h6>
      <div className={`filter-options`}>
        <span className="exit" onClick={showProductFilter}>
          <MdClose />
        </span>
        <label>
          <h6
            className={`head ${activefilterOne}`}
            onClick={() =>
              setActivefilterOne(
                activefilterOne === "activefilter"
                  ? "dis-activefilter"
                  : "activefilter"
              )
            }
          >
            <span className="head_filter"> Multi Range</span>
            <span className="arrow">
              {activefilterOne == "activefilter" ? (
                <MdOutlineKeyboardArrowRight />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </h6>
        </label>
        <form
          onChange={(e) => handleRangeDistance(e)}
          className={`${
            activefilterOne === "activefilter" ? "invisibilty" : "visibilty"
          }`}
        >
          <label className="form-control">
            <input
              type="radio"
              id="multi-range"
              name="range"
              value="<= 10000 k.m"
            />
            {`< 10000 k.m`}
          </label>
          <label className="form-control">
            <input
              type="radio"
              id="multi-range"
              name="range"
              value="<= 20000 k.m"
            />
            {`< 20000 k.m`}
          </label>
          <label className="form-control">
            <input
              type="radio"
              id="multi-range"
              name="range"
              value="<= 100000 k.m"
            />
            {`< 100000 k.m`}
          </label>
          <label className="form-control">
            <input type="radio" id="multi-range" name="range" value="all" />
            All
          </label>
        </form>

        <form className="slider-range">
          <RangeSlider
            products={products}
            theme={theme}
            setFilterdProducts={setFilterdProducts}
          />
        </form>

        <label>
          <h6 className={`head `}>
            <span className="head_filter"> Time</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowDown />
            </span>
          </h6>
        </label>

        <form onChange={(e) => handleRangeTime(e)}>
          <label className="form-control">
            <input type="radio" id="time" name="duration" value="<10" />
            {`< 10 day`}
          </label>
          <label className="form-control">
            <input type="radio" id="time" name="duration" value="<20" />
            {`< 20 day`}
          </label>
          <label className="form-control">
            <input type="radio" id="time" name="duration" value="<30" />
            {`< 30 day`}
          </label>
          <label className="form-control">
            <input type="radio" id="time" name="duration" value="all" />
            All
          </label>
        </form>

        <label>
          <h6 className={`head`}>
            <span className="head_filter"> Places</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowDown />
            </span>
          </h6>
        </label>
        <form onChange={(e) => handleLocation(e)}>
          {locArr.map((loc, key) => (
            <label className="form-control" key={key}>
              <input type="radio" id="location" name="range" value={loc} />
              {loc}
            </label>
          ))}
          <label className="form-control">
            <input type="radio" id="barnd" name="range" value="all" />
            all
          </label>
        </form>
      </div>
    </div>
  );
}
