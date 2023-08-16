/** @format */

import React, { useState, useRef, useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.scss";
import { Context } from "../../context/Context";

export default function SearchFilter({
  products,
  filterdProducts,
  setFilterdProducts,
  feature,
  handleByPrice,
  showProductFilter,
  theme,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [active, setActive] = useState(false);
  const focusInput = useRef();
  const { BlurInput } = useContext(Context);

  function handleSearchByName(e) {
    setSearchValue(e.target.value);
    e.target.value.trim()
      ? setFilterdProducts(
          products.filter((product) =>
            product.title
              .toLowerCase()
              .includes(e.target.value.trim().toLowerCase())
          )
        )
      : setFilterdProducts(products);
  }

  function handleSortBtn() {
    setActive(active ? false : true);
  }

  useEffect(() => {
    focusInput.current.focus();
  }, [BlurInput]);

  return (
    <div className={`search-filter ${theme}-theme`}>
      <div className="search-row">
        <h4>{filterdProducts.length} results found</h4>
        <div className="toggle-menu" onClick={() => showProductFilter()}>
          <GiHamburgerMenu />
        </div>
        <div className="btns">
          <div className="features">
            <button className="features-btn" onClick={() => handleSortBtn()}>
              {feature}
              <span className="features_btn_down">
                <RiArrowDownSLine />
              </span>
            </button>
            <ul className={active ? "active" : ""}>
              <li
                onClick={(e) => {
                  handleByPrice(e);
                  handleSortBtn();
                }}
              >
                Featured
              </li>
              <li
                onClick={(e) => {
                  handleByPrice(e);
                  handleSortBtn();
                }}
              >
                Lowest
              </li>
              <li
                onClick={(e) => {
                  handleByPrice(e);
                  handleSortBtn();
                }}
              >
                Highest
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search Product"
          value={searchValue}
          onChange={(e) => handleSearchByName(e)}
          ref={focusInput}
        />
        <span>
          <FiSearch />
        </span>
      </form>
    </div>
  );
}
