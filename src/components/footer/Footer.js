/** @format */

import React from "react";
import "./index.scss";

export default function Footer({ theme }) {
  return (
    <div className={`footer ${theme}-theme`}>
      <p className="left">
        <span>All rights Reserved</span>
      </p>
    </div>
  );
}
