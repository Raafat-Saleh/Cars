/** @format */

import React from "react";
import Dropdown from "../dropdown/Dropdown";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FcTodoList } from "react-icons/fc";
import "./index.scss";
import SidebarSmall from "../sidebar_small/sidebarSmall/SidebarSmall";

export default function Sidebar({ activeSideBar, theme }) {
  return (
    <div>
      {!activeSideBar ? (
        <div className={`sidebar_big ${theme}-theme_big`}>
          <div className="sidebar-header_big">
            <div className="logo_big">
              <div className="logo-img_big">
                <img src="./logo192.png" />
              </div>
            </div>
          </div>
          <div className="dashboards_big">
            <Dropdown theme={theme} icon={<AiOutlineHome />} head="Home" />
            <Dropdown theme={theme} head="Email" icon={<AiOutlineMail />} />
            <Dropdown theme={theme} head="Chat" icon={<BsChatLeft />} />
            <Dropdown theme={theme} head="Todo" icon={<FcTodoList />} />
            <Dropdown
              theme={theme}
              head="Calender"
              icon={<AiOutlineCalendar />}
            />
            <Dropdown theme={theme} icon={<AiOutlineUser />} head="Dashboard" />
            <Dropdown theme={theme} icon={<FiShoppingCart />} head="Store" />
          </div>
        </div>
      ) : (
        <SidebarSmall activeSideBar={activeSideBar} theme={theme} />
      )}
    </div>
  );
}
