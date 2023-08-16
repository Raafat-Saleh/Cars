/** @format */

import React, { useContext } from "react";
import "./index.scss";
import { AiOutlineUser } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../../context/Context";

export default function Header({ showSidebar, theme, setTheme }) {
  const { BlurSearch } = useContext(Context);

  return (
    <div className={`header ${theme}-theme`}>
      <nav className="header-nav">
        <p className="name_proj">Cars</p>
        <div className="left">
          <ul>
            <li className="toggle-menu" onClick={() => showSidebar()}>
              <GiHamburgerMenu />
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="icons">
            <li className="lang">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
                alt="k"
              />
              <span className="lang-span">English</span>
            </li>
            <li
              className="toggle-theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <BiSun /> : <MdOutlineDarkMode />}{" "}
            </li>
            <li onClick={BlurSearch} className="search_icon">
              <FiSearch />
            </li>
            <li className="notification">
              <span className="notification-sapn">2</span>
              <FiShoppingCart />
            </li>
            <li className="notification">
              <span className="notification-sapn">16</span>
              <RiNotification3Line />
            </li>
            <li className="user">
              <div className="user-info">
                <p className="user-name">Raafat Saleh</p>
                <span className="user-role">admin</span>
              </div>
              <span className="user-icon">
                <AiOutlineUser />
                <span className="status"></span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
