/** @format */

import React from "react";
import "./index.scss";

export default function Dropdown({ icon, head, theme }) {
  return (
    <div className={`dropdown_big ${theme}-theme_big`}>
      <div className={`dropdown-head_big `}>
        <h3 title={head}>{icon}</h3>
      </div>
    </div>
  );
}
