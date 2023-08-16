/** @format */

import React from "react";
import "./index.scss";

export default function DropdownSmall({ icon, head, theme }) {
  return (
    <div className={`dropdown ${theme}-theme`}>
      <div className={`dropdown-head `}>
        {icon && icon}
        <h3 className={!icon ? "heading" : ""}>{head}</h3>
      </div>
    </div>
  );
}
