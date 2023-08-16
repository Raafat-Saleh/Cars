/** @format */

import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsChatLeft, BsRecordCircle } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FcTodoList } from "react-icons/fc";
import "./index.scss";
import DropdownSmall from "../dropdown/DropdownSmall";

export default function SidebarSmall({ activeSideBar, theme }) {
  return (
    <div className={`sidebar ${activeSideBar} ${theme}-theme`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-name">
            <h2>Cars</h2>
          </div>
        </div>
      </div>
      <div className="dashboards">
        <DropdownSmall
          theme={theme}
          icon={<AiOutlineHome />}
          head="Dashboards"
        />
        <DropdownSmall theme={theme} head="Email" icon={<AiOutlineMail />} />
        <DropdownSmall theme={theme} head="Chat" icon={<BsChatLeft />} />
        <DropdownSmall theme={theme} head="Todo" icon={<FcTodoList />} />
        <DropdownSmall
          theme={theme}
          head="Calender"
          icon={<AiOutlineCalendar />}
        />

        <DropdownSmall
          theme={theme}
          icon={<FiShoppingCart />}
          head="eCommerce"
        />
        <DropdownSmall
          theme={theme}
          icon={<AiOutlineUser />}
          head="Dashboards"
        />
      </div>
    </div>
  );
}
